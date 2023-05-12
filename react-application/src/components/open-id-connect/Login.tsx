import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import { Auth, app } from "../../configuration/FirebaseConfiguration"
import { GoogleLoginButton } from "react-social-login-buttons";
import { sign } from "crypto";
import { ChangeEvent } from 'react';
import { useAuth } from "../shared/useAuth";
import { styled } from "styled-components";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog } from "@reach/dialog";
import { createUserWithEmailAndPassword } from "firebase/auth";

const StyledGoogleLoginButton = styled(GoogleLoginButton).attrs({
  iconSize: "16px",
})`
    max-width: 300px;
    & > div {
      font-size: 14px;
    }
  `;

const Login: React.FC = () => {
  const user = useAuth().user;
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  const auth = useAuth().auth;
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const navigate = useNavigate();
  const close = () => {
    setShowDialog(false);
    if (user === null) {
      navigate("/");
    }
  };

  const location = useLocation();
  const style: React.CSSProperties = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  };
  useEffect(() => {
    open();
  }, []);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    await createUserWithEmailAndPassword(Auth, email, password);
    navigate("/");
  };
 
  return (
    <>
    <div style={style} id="cv">
      <div style={style}>
        <h1>Login Page</h1>
        <div className="inputs">
          <div className="input">
            <input placeholder="Email" 
             onChange = {(event: ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
             }}
            type="text" />
          </div>
          <div className="input">
            <input placeholder="Password"
            onChange = {(event: ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value)
           }}
            type="password" />
          </div>
          <div className="input">
            <button onClick={signIn}>Log in</button>
          </div>
        </div>
      </div>
      <div>
        
        {/* <button onClick={open}>Open Dialog</button> */}
        
      </div>
    </div>
    <div>
    
          <StyledGoogleLoginButton
            onClick={async () => {
              try {
                await signInWithPopup(auth, provider);
                close();
                navigate((location && location.state) || "/");
              } catch (error) {
                console.log(error);
                navigate("/");
              }
            }}
          ></StyledGoogleLoginButton>
        
    </div>
    </>
  );
};

export { Login };


