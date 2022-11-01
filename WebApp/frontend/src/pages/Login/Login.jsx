import './Login.scss';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import logo from './logo.png';
import welcomeBack from './welcomeback.svg';

import AuthContext from '../../context/AuthContext';
import ToastContext from '../../context/ToastContext';

const Login = () => {

    const {toast} = useContext(ToastContext);
    const {loginUser} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setCredentials({...credentials, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!credentials.username || !credentials.password) {
            toast.error("Please enter all required fields!");
            return;
        }

        loginUser(credentials);
    };

    return (
        <div className='main-login'>
            <div className="login-contain">
                <div className="left-side">

                    <div className="img-class">
                        <img src={logo} id="img-id" alt="" />
                    </div>
                 
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="usernameInput">Username:</label>
                            <input 
                                placeholder="Enter username" 
                                type="text" 
                                name='username'
                                value={credentials.username} 
                                onChange={handleInputChange} 
                                id="usernameInput"
                                required
                            />

                        <label htmlFor="passwordInput">Password:</label>
                            <input 
                                placeholder="Enter password" 
                                type="password" 
                                autoComplete="false"
                                name='password'
                                value={credentials.password} 
                                onChange={handleInputChange}
                                id="passwordInput"
                                required
                            />

                        <p>
                            You don't have an account ? <Link to="/register">Register</Link>
                        </p>

                        <button type="submit" id="sub_butt">Login</button>
                    </form>

                </div>
                
                <div className="right-side">
                    <div className="welcomeNote">
                        <h3>Welcome Back!</h3>
                    </div>

                    <div className="welcomeImg">
                        <img src={welcomeBack} id='wel-img-id' alt=""  />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;