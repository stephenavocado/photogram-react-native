import React from "react";
import AuthNavigation from "../AuthNavigation";
import Feed from "../Feed";
import { AuthContext } from "../AuthProvider";
import { NavigationContainer } from '@react-navigation/native';

export default function Navigation() {
    const { user } = React.useContext(AuthContext);

    return (
        <NavigationContainer>
            {user ? <Feed /> : <AuthNavigation />}
        </NavigationContainer>
    );
}
  