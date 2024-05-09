import React, { useState } from "react";
import showPassword from "../pages/profile/showPassword";
import logo from "../../assets/img/login-logo2.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginAuth = () => {
    const { email, password } = formData;
    if (!email || !password) {
      return alert("Please enter email and password!");
    }
    // Gawa kau ng REST API sa backend(BE) tas ipasa nyo ung state na formData sa BE nyu gagawin validations nyu d2 kau bubutasin ng mga panel
    return navigate("/dashboard");
  };

  return (
    <div className="loginPage">
      <div className="leftSide">
        <div className="nuLogo">
          <img src={logo} alt="NU LOGOHP" id="nuLogo" />
        </div>
      </div>

      <div className="rightSide">
        <div className="loginForm">
          <div id="input">
            <h2> LOGIN </h2>

            <div className="loginFields">
              <div className="usernameField">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
              <div className="passwordField">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="pwd"
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
                <input
                  type="checkbox"
                  onClick={showPassword}
                  id="showPasswordbox"
                />
              </div>
            </div>

            <a href="forgot_Password.php" id="forgot">
              Forgot Password?
            </a>
            <div className="buttonsDiv">
              <input
                type="submit"
                value="Login"
                className="buttonLogin"
                onClick={() => {
                  loginAuth();
                }}
              />
            </div>
            <p>
              Don't have an account?{" "}
              <a href="signup" id="signup">
                {" "}
                Sign up Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
