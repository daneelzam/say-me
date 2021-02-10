import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import style from './Login.module.css';
import { loginFetchAC, signUpFetchAc } from '../../../redux/actionCreators/authAC';

function Login() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState(true);
  const [styleAnim, setStyleAnim] = useState(`${style.container}`);
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
    if (styleAnim === `${style.container}`) {
      setStyleAnim(`${style.container} ${style.right_panel_active}`);
    } else {
      setStyleAnim(`${style.container}`);
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    dispatch(loginFetchAC({ email, password }));
  };

  const signUpHandler = async (event) => {
    event.preventDefault();
    dispatch(signUpFetchAc({
      name, email, password, goal
    }));
  };
  const goalHandler = (e) => {
    setGoal(e.target.value);
  };
  return (
  <section className={style.body_for_login}>
        <div className={styleAnim} ref={containerRef} id="container">
            <div className={`${style.form_container} ${style.sign_up_container}`}>
                <form className={style.form} onSubmit={signUpHandler}>
                    <input className={style.input} type="text" placeholder="Name" onChange={handleName}/>
                    <input className={style.input} type="text" placeholder="Email" onChange={handleEmail}/>
                    <input className={style.input} type="password" placeholder="Password" onChange={handlePassword}/>
                    <div className={style.input}>
                    <span className={style.input_goal}>Goal</span>
                    <select className={style.select} onChange={goalHandler} value={goal}>
                        <option className={style.option} value={true}>get pregnant</option>
                        <option className={style.option} value={false}>don't get pregnant</option>
                    </select>
                    </div>
                    <button className={style.btn}>Sign Up</button>
                </form>
            </div>
            <div className={`${style.form_container} ${style.sign_in_container}`}>
                <form className={style.form} onSubmit={loginHandler} >
                    <input className={style.input} type="text" placeholder="Email" onChange={handleEmail}/>
                    <input className={style.input} type="password" placeholder="Password" onChange={handlePassword} />
                    <button className={style.btn}>Sign In</button>
                </form>
            </div>
            <div className={style.overlay_container}>
                <div className={style.overlay}>
                    <div className={`${style.overlay_panel} ${style.overlay_left}`}>
                        <h1 className={style.h1}>Welcome Back!</h1>
                        <p className={`${style.p} ${style.overlay_panel_p}`}>
                          To keep connected with us please login with your personal info
                        </p>
                        <button className={`${style.btn} ${style.button_ghost}`} onClick={styleHandler} id="signIn">Sign In</button>
                    </div>
                    <div className={`${style.overlay_panel} ${style.overlay_right}`}>
                        <h1 className={style.h1}>Hey!</h1>
                        <p className={`${style.p} ${style.overlay_panel_p}`}>
                        If you are not registered on our website yet, then click "Sign Up"
                        </p>
                        <button className={`${style.btn} ${style.button_ghost}`} onClick={styleHandler} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
  </section>
  );
}

export default Login;
