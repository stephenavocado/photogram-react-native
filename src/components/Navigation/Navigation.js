import React from "react";
import SignIn from "../SignIn";
import Feed from "../Feed";

export default function Navigation() {
    const [user, setUser] = React.useState(null);

    return (
        user ? <Feed user={user} /> : <SignIn setUser={setUser} />
    );
}
  