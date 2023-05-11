import { onAuthStateChanged, getAuth, User } from "@firebase/auth"
import { useEffect, useRef, useState } from "react";
import { app } from "../../configuration/FirebaseConfiguration"
import { unsubscribe } from "diagnostics_channel";
const useAuth = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState<User | null>(null);
    let mounted = useRef<boolean>(false);
    useEffect(() => {
        mounted.current = true;
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                if (mounted.current)
                    setUser(user);
            }
            else {
                if (mounted.current)
                    setUser(null);
            }
        });
        return () => {
            mounted.current = false;
            unsubscribe();
        };
    }, [auth]);
    return {
        user,
        auth
    };
};

export { useAuth };