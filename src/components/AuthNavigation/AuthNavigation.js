import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./SignIn";

const AuthStack = createNativeStackNavigator();

function AuthNavigation() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
        </AuthStack.Navigator>
    )
};

export default AuthNavigation;

