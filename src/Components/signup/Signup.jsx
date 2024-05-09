import React from "react";
import logo  from '../../assets/img/nu_banner2.png';
import './signup.css';

const Signup = () => {
    return (
        <div className="signupPage">
            <div>
                <div className="nuLogo">
                    <img src={logo} alt="NU LOGO"/>
                </div>
            </div>

            <div className="signupForm">
                <form id="signupForm" method="post">
                    <div id="input">
                        <h1>Sign Up</h1>

                        <div className="signupFields">
                            <div className="idNumberField">
                                <label htmlFor="idNumber">ID Number</label>
                                <input type="text" id="idNumber" name="idnumber" placeholder="Enter your ID Number" required/>
                            </div>

                            <div className="emailField">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="email@email.com" required/>
                            </div>

                            <div className="passwordField">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your Password" required/>
                            </div>

                            <div className="confirmPasswordField">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your Password" required/>
                            </div>
                        </div>

                        <div className="buttonsDiv">
                            <input type="submit" value="Sign Up" className="buttonSignup"/>
                        </div>
                        <p>Already have an account? <a href="login" id="login">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
