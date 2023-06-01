import React from "react";

import axios from "axios";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [request, setRequest] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef=useRef()

  const authctx = useContext(AuthContext);

  const history = useHistory();

  const switchingHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if(!isLogin){
      const enteredConfirmPassword=confirmPasswordInputRef.current.value;
      if(enteredPassword===enteredConfirmPassword){
        try{
          setRequest(true);
          axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoH_q6JD5No1SLaDSH6eU_DoIX6mW8o9M",{
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken: true,
          })
          setRequest(false)
          console.log("User has successfully signed up")
        }catch(error){
          console.log(error)
          setRequest(false)
        }
      }
    }else{
      try {
        setRequest(true);
        let response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoH_q6JD5No1SLaDSH6eU_DoIX6mW8o9M",
          {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }
        );
        authctx.login(response.data.idToken, response.data.email);
        setRequest(false);
        history.replace("/store");
      } catch (error) {
        alert(error.response.data.error.message);
        setRequest(false);
      }
    }

  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin?"Login":"SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {!isLogin ? <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            ref={confirmPasswordInputRef}
          />
        </div>:""}
        <div className={classes.actions}>
          {!request ? (
            <button type="submit">{ isLogin ? "login" : "SignUp"}</button>
          ) : (
            "Sending request.."
          )}
        </div>
        <button type="button"
          style={{
            background: "none",
            border: "none",
            marginTop: "0.5em",
            color: "white",
          }}
          onClick={switchingHandler}
        >
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
