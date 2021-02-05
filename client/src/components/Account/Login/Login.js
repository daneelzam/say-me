import React, { useState, useRef } from 'react';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const containerRef = useRef();

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const styleHandler = () => {
    if (containerRef.current.classList.contains('right-panel-active')) {
      containerRef.current.classList.remove('right-panel-active');
    } else {
      containerRef.current.classList.add('right-panel-active');
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  const signUpHandler = async (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
        <div className="container" ref={containerRef} id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={signUpHandler}>
                    <input type="text" placeholder="Name" onChange={handleName}/>
                    <input type="text" placeholder="Email" onChange={handleEmail}/>
                    <input type="password" placeholder="Password" onChange={handlePassword}/>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={loginHandler} >
                    <h1>Sign in</h1>
                    <input type="text" placeholder="Email" onChange={handleEmail}/>
                    <input type="password" placeholder="Password" onChange={handlePassword} />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={styleHandler} id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={styleHandler} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Login;
