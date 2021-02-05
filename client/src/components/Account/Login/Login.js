import React, { useState } from 'react';

function Login() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

  //   function handleEmail(event) {
  //     setEmail(event.target.value);
  //   }

  //   function handlePassword(event) {
  //     setPassword(event.target.value);
  //   }

  return (
  <div className="container" id="container">
    <div className="form-container sign-up-container">
        <form action="#"><input type="text" placeholder="Name" /><input type="email" placeholder="Email" /><input type="password" placeholder="Password" />
<button>Sign Up</button>
</form>
    </div>
<div className="form-container sign-in-container">
        <form action="#">
            <h1>Sign in</h1><input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <a href="#">Forgot your password?</a>
    <button>Sign In</button>
    </form>
    </div>
    <div className="overlay-container">
        <div className="overlay">
            <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
    <p>To keep connected with us please login with your personal info</p>
    <button className="ghost" id="signIn">Sign In</button>
    </div>
    <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
<p>Enter your personal details and start journey with us</p>
<button className="ghost" id="signUp">Sign Up</button>
</div>
</div>
</div>
</div>
  );
}

export default Login;
