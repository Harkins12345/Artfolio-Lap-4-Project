import React from "react";
import "../../styles/index.css";

function SignInFooter() {
  return (
    <section id="signInFooter">
      <div className="centered">
        <h3 className="ready">Ready to get started?</h3>
        <button className="btn btn-primary signInFooter-btn">Sign In</button>
      </div>
      <p id="createAccount">Haven't got an account? Create one now!</p>
    </section>
  );
}

export default SignInFooter;
