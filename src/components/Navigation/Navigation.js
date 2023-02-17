import React from "react";
import { Text, View, TextInput } from 'react-native';

function SignUp() {
    return (
        <TextInput />
    )
}

function HomeScreen() {
    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    )
};

export default function Navigation() {
    const [user, setUser] = React.useState(null);

    return (
        user ? <HomeScreen /> : <SignUp />
    );
}