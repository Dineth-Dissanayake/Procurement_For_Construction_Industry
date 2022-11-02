import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

const Splash = () => {

    const [isGo, setIsGo] = useState(true);
    const Navigation = useNavigation();

    useEffect(() => {
        if(isGo == true) {
            setTimeout(() => {
                Navigation.navigate("Login");
                setIsGo(false);
            },3000);
        }
    });

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
            <Image source={require("../../assets/images/logo.png")}
                style={{width:200,height:200,borderRadius:100}}
            />
        </View>
    )
}

export default Splash;