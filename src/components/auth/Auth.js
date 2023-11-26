import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Login from "./Login";
import Home from "../layout/Home";
import Register from "./Register";
import { useState } from "react";

export const handleSignUp = async (email, pass) => {
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

export const Auth = () => {
  console.log(auth?.currentUser?.email);
  const navigate = useNavigate();
  const currentUser = auth?.currentUser;


  const [isRegistering, setIsRegistering] = useState(false);


  const logOut = async () => {
    console.log("signing out");
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };


  if (currentUser) {
    return <Home logOut={logOut} />;
  }

  const signIn = async (email, pass) => {
    console.log("Attempting to sign in...");
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      console.log("Sign in successful, navigating to /Home");
      navigate("/Home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
     {!currentUser ? (
        isRegistering ? ( 
          <Register
          handleSignUp={(email, pass) => handleSignUp(email, pass)}
          switchToLogin={() => setIsRegistering(false)}
          />
        ) : (
          <Login
          signUp={handleSignUp}
          signIn={signIn}
          switchToRegister={() => setIsRegistering(true)}
          />
        )
      ) : (
        <Home logOut={logOut} />
      )}
    </div>
  );
};

export default Auth;
