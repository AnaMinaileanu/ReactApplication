import {signOut} from "@firebase/auth";
import { useEffect } from "react";
import {useAuth} from "../shared/useAuth"


const Logout = () => {
    const {auth} = useAuth();
    useEffect(() => {
        (async () => {
            await signOut(auth);
        })();
    }, [auth]);
    return(
        <>
        
        </>
    );
};

export {Logout};