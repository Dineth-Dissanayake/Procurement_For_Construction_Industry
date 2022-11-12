import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUserLoggedIn();
    }, []);


    const checkUserLoggedIn = async () => {
        try {
            const res = await fetch(`http://172.28.7.93:8090/api/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${AsyncStorage.getItem("token")}`,
                },
            });
            const result = await res.json();
            if (!result.error) {
              setUser(result);
            }
        } catch (err) {
            console.log(err);
        }
    };


    const loginUser = async (userData) => {
        try {
            const res = await fetch(`http://172.28.7.93:8090/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...userData }),
            });
    
            const result = await res.json();
            if (!result.error) {
                AsyncStorage.setItem("token", result.token);
                setUser(result.user);
                alert(`Logged in ${result.user.username}`);
            
            } else {
                alert(result.error);
            }
        } catch (err) {
            console.log(err);
        }
    };


    const registerUser = async (userData) => {
        try {
            const res = await fetch(`http://172.28.7.93:8090/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...userData }),
            });
            const result = await res.json();
    
            if (!result.error) {
                alert("User Registered Successfully!");
            } else {
                alert(result.error);
            }
        } catch (err) {
            console.log(err);
        }
      };


      const addOrder = async (userData) => {
        try {
            const res = await fetch(`http://172.28.7.93:8090/order/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...userData }),
            });

            const result = await res.json();
    
            if (!result.error) {
                alert("Order Added Successfully!");
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.log(error);
        }
      };



      return (
        <AuthContext.Provider value={{ loginUser, user, setUser, registerUser, addOrder }}>
            {children}
        </AuthContext.Provider>
      );
};

export default AuthContext;