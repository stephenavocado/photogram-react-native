import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./SignIn";

const AuthStack = createNativeStackNavigator();

function AuthNavigation({ setUser }) {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} />
        </AuthStack.Navigator>
    )
};

export default AuthNavigation;

