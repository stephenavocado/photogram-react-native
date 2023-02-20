import React from "react";
import SignIn from "../SignIn";
import Feed from "../Feed";
import { AuthContext } from "../AuthProvider";

export default function Navigation() {
    const { user } = React.useContext(AuthContext);

    return (
        user ? <Feed /> : <SignIn />
    );
}
  