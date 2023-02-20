import React from "react";
import AuthNavigation from "../AuthNavigation";
import TabNavigation from "../TabNavigation";
import { AuthContext } from "../AuthProvider";
import { NavigationContainer } from '@react-navigation/native';

export default function Navigation() {
    const { user } = React.useContext(AuthContext);

    return (
        <NavigationContainer>
            {user ? <TabNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
}
  