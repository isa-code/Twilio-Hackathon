import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Login.css";
import SousNav from "./SousNav";

function Login() {
  return (
    <>
      <Navbar />
      <SousNav/>

      <div className="login">
        <h1>Sign-in</h1>

        <form className="formLogin">
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
