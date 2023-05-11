import { onAuthStateChanged, getAuth, User } from "@firebase/auth"
import { useEffect, useState } from "react";
import {app} from "../../configuration/FirebaseConfiguration"
import { useAuth } from "../shared/useAuth";

const Dashboard = () => {
    const {user} = useAuth();
    return(
        <div>
            <h1>Dashboard</h1>
            <p>This is the dashboard page</p>
            {user ? (user.displayName) : (<>Not logged in</>)}
        </div>
    );
};

export default Dashboard;