import React from "react";
import showPassword from "../pages/profile/showPassword";
import logo from '../../assets/img/login-logo2.png';
import './login.css';

const Login = () => {
    return (
        <div className="loginPage">
            <div className="leftSide">
                <div className="nuLogo">
                    <img src={logo} alt="NU LOGOHP" id="nuLogo"/> 
                </div>
            </div>

            <div className="rightSide">
                <div className="loginForm">
                    <form id="loginForm" method="post">
                        <div id="input">
                            <h2> LOGIN </h2>

                            <div className="loginFields">
                                <div className="usernameField">
                                    <label htmlFor="username">Email</label>
                                    <input type="text" name="email" placeholder="Email" required />
                                </div>
                                <div className="passwordField">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" placeholder="Password" id="pwd" required />
                                    <input type="checkbox" onClick={showPassword} id="showPasswordbox" />
                                </div>
                            </div>

                            <a href="forgot_Password.php" id="forgot">Forgot Password?</a>
                            <div className="buttonsDiv">
                                <input type="submit" value="Login" className="buttonLogin" />
                            </div>
                            <p>Don't have an account? <a href="signup" id="signup"> Sign up Now</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
