import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginModal from "react-modal-login";

import "./Login.css";

const Login = (props) => {
  const element = <h1>element</h1>;
  const history = useHistory();
  const [ error, setError ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(true);

  const handleSubmit = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email) || password === "") {
      setError(true);
    } else {
      setIsVisible(false);
      history.push("/home");
    }
  }

  const afterTabsChange = (e) => {
    setError(false);
  }

  return (
    <LoginModal
        mainWrapClass="login-modal"
        overlayClass="login-overlay"
        additionalWrap="wrapper"
        visible={isVisible}
        error={error}
        tabs={{
          afterChange: afterTabsChange
        }}
        closeBtn={{
          containerClass: "close-btn"
        }}
        form={{
          onLogin: handleSubmit,
          onRegister: handleSubmit,
          loginBtn:{
            buttonClass: "login-btn",
            label: "Sign in"
          },
          registerBtn:{
            buttonClass: "register-btn",
            label: "Sign Up"
          },
          loginContainerClass: "login-container",
          loginInputs:[
            {
              containerClass:"login-email",
              type:"email",
              id:"email",
              placeholder:"Enter your email",
              label:"Email"
            },
            {
              containerClass:"login-password",
              type:"password",
              id:"password",
              placeholder:"Enter your password",
              label:"Password"
            }
          ],
          registerInputs:[
            {
              containerClass:"register-email",
              type:"email",
              id:"email",
              placeholder:"Register your email",
              label:"Email"
            },
            {
              containerClass:"register-password",
              type:"password",
              id:"password",
              placeholder:"Register your password",
              label:"Password"
            }
          ]
        }}
        loginError={{
          containerClass:"login-error",
          label:"Invalid credentials. Please try again."
        }}
        registerError={{
          containerClass:"register-error",
          label:"Invalid credentials. Please try again."
        }}
    />
  )
}

export default Login;