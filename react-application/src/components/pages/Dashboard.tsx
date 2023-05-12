import { onAuthStateChanged, getAuth, User } from "@firebase/auth"
import { ChangeEvent, useEffect, useState } from "react";
import { app } from "../../configuration/FirebaseConfiguration"
import { useAuth } from "../shared/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const sendMessage = (e:any) => {
            e.preventDefault();
            console.log(message);
    
    };
    return (
        <div>
            <h1>Dashboard</h1>

            <div> {user ? (<><p>Hello, {user.email}. Welcome to the Liverpool FC Romanian Fanclub.</p>
                <p>Leave us a message.</p>
                <form className="contact">
                    <h4>Send us a message, suggestions, jokes, memes</h4>
                    <div className="form-field">
                        <input type="text" id="message" placeholder="Type your message here" onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setMessage(event.target.value)
             }} />
                        <button type="submit" className="submit-button" onClick={(e) => sendMessage(e)} >Send</button>
                    </div>
                </form>
            </>) : (<>Not logged in</>)}</div>
        </div>
    );
};

export default Dashboard;