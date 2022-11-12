import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screen/Home";
import Login from "../screen/auth/Login";
import Register from "../screen/auth/Register";
import Forget from "../screen/auth/Forget";
import Splash from "../screen/splash/Splash";
import PlaceOrder from "../screen/PlaceOrder";
import OrderHistory from "../screen/OrderHistory";
import Items from "../screen/Items";
import Supplier from "../screen/Suppliers";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
                <Stack.Screen options={{headerShown:false}} name="Forget" component={Forget} />
                <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} />
                <Stack.Screen name="Items" component={Items} />
                <Stack.Screen name="Supplier" component={Supplier} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter;