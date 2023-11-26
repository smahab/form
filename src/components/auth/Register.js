import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp as authHandler } from "./Auth";


const Register = ({ switchToLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const emailReg = /^\S+@\S+\.\S+$/;

  const signUp = async (email, pass) => {
    if (!emailReg.test(email) || pass.trim() === "") {
      setError("Invalid email or password is required.");
      console.log("Invalid email or password");
      return;
    }
  
    try {
      await authHandler(email, pass);
      navigate("/");
      console.log("Registration successful");
    } catch (error) {
      setError(error.message);
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup">
        <div className="form">
          <div className="content">
            <form>
              <section>
                <div className="inputbox">
                  <h2>Register</h2>              
                  <input
                    placeholder="Email"
                    type="email"
                    required="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    placeholder="Password"
                    required type="password"
                    onChange={(e) => setPass(e.target.value)}
                  />

                  <button className="signupbutton"
                    type="button"
                    onClick={() => {
                      signUp(email, pass);
                    }}
                  >
                    Skapa nytt konto
                  </button>

                  <p style={{
                    color: '#ffffff'
                  }}>
                    Already have an account?
                    <span onClick={switchToLogin}> Login</span>
                  </p>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
