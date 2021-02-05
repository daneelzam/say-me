import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import style from './Login.module.css';
import { authErrorAC, authSuccessfullyAC } from '../../../redux/actionCreators/authAC';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [styleAnim, setStyleAnim] = useState(`${style.container}`);
  const containerRef = useRef();

  const dispatch = useDispatch();

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
    if (styleAnim === `${style.container}`) {
      setStyleAnim(`${style.container} ${style.right_panel_active}`);
    } else {
      setStyleAnim(`${style.container}`);
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
      .then((result) => {
        if (result.user) {
          dispatch(authSuccessfullyAC(result.user));
        } else {
          dispatch(authErrorAC('Wrong email or password!'));
        }
      });
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
      .then((result) => {
        if (result.user) {
          dispatch(authSuccessfullyAC(result.user));
        } else {
          dispatch(authErrorAC('Such user already exists'));
        }
      });
  };

  return (
  <section className={style.body_for_login}>
        <div className={styleAnim} ref={containerRef} id="container">
            <div className={`${style.form_container} ${style.sign_up_container}`}>
                <form className={style.form} onSubmit={signUpHandler}>
                    <input className={style.input} type="text" placeholder="Name" onChange={handleName}/>
                    <input className={style.input} type="text" placeholder="Email" onChange={handleEmail}/>
                    <input className={style.input} type="password" placeholder="Password" onChange={handlePassword}/>
                    <button className={style.button}>Sign Up</button>
                </form>
            </div>
            <div className={`${style.form_container} ${style.sign_in_container}`}>
                <form className={style.form} onSubmit={loginHandler} >
                    <h1 className={style.h}>Sign in</h1>
                    <input className={style.input} type="text" placeholder="Email" onChange={handleEmail}/>
                    <input className={style.input} type="password" placeholder="Password" onChange={handlePassword} />
                    <a className={style.a} href="#">Forgot your password?</a>
                    <button className={style.button}>Sign In</button>
                </form>
            </div>
            <div className={style.overlay_container}>
                <div className={style.overlay}>
                    <div className={`${style.overlay_panel} ${style.overlay_left}`}>
                        <h1 className={style.h1}>Welcome Back!</h1>
                        <p className={`${style.p} ${style.overlay_panel_p}`}>
                          To keep connected with us please login with your personal info
                        </p>
                        <button className={`${style.button_ghost} ${style.button}`} onClick={styleHandler} id="signIn">Sign In</button>
                    </div>
                    <div className={`${style.overlay_panel} ${style.overlay_right}`}>
                        <h1 className={style.h1}>Hello, Friend!</h1>
                        <p className={`${style.p} ${style.overlay_panel_p}`}>
                          Enter your personal details and start journey with us
                        </p>
                        <button className={`${style.button} ${style.button_ghost}`} onClick={styleHandler} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
  </section>
  );
}

export default Login;
