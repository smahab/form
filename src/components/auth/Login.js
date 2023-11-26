import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sign-page.css";
import Register from "./Register";

const Login = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/Register");
  };

  return (
    <div className="login-page">
      <div className="signin">
        <div className="form">
          <div className="content">
            <form>
              <section>
                <div className="inputbox">
                  <h2>SIGN IN</h2>
                  <input
                    placeholder="Email"
                    required="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <input
                    placeholder="Password"
                    required="password"
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                  ></input>
                  <button
                    className="signinbutton"
                    type="button"
                    onClick={() => signIn(email, pass)}
                  >
                    Logga In
                  </button>
                  <hr />
                  <button
                    className="signupbutton"
                    type="button"
                    onClick={handleSignUpClick}
                  >
                    Skapa nytt konto
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
