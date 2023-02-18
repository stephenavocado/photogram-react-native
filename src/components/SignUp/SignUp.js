import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function SignUp() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");

    return (
        <View>
            <Text style={styles.title}>Sign Up!</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="Email"
                textContentType="emailAddress"
                inputMode="email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                value={passwordConfirmation}
                onChangeText={(value) => setPasswordConfirmation(value)}
                placeholder="Password Confirmation"
                textContentType="password"
                secureTextEntry={true}
            />
            <Button
                title="Sign Up"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 12,
      marginBottom: 12,
      borderWidth: 1,
      padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    }
});

export default SignUp;
