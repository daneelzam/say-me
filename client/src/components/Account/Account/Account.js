import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Account.module.css';
import { partnerFetchAC, getPregnantFetchAC } from '../../../redux/actionCreators/partnerAC';

function Account() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [partnerContactState, setPartnerEmail] = useState(user.partnerContact);
  const [goalState, setGoalState] = useState(user.toGetPregnant);

  const [showGoalFlag, setshowGoalFlag] = useState(false);
  const [showEmailFlag, setshowEmailFlag] = useState(false);

  function handlePartnerPassword(event) {
    setPartnerEmail(event.target.value);
  }

  const pregnancyHandler = () => {
    setGoalState((prevState) => !prevState);
  };

  const goalHandler = (event) => {
    event.preventDefault();
    dispatch(getPregnantFetchAC(goalState, user.id));
    setshowGoalFlag((prevState) => !prevState);
  };

  function handleAccount(event) {
    event.preventDefault();
    setshowEmailFlag(!showEmailFlag);
    dispatch(partnerFetchAC(partnerContactState, user.id));
  }

  return (
    <section className={style.main}>
        <span><img src="images/avatar.jpg" alt=""/></span>
        <div className={style.box}>
          <span className={style.solid}>Name: </span><span className={style.p}>{user.name}</span>
        </div>
        <div className={style.box}>
          <span className={style.solid}>Email: </span><span className={style.p}>{user.email}</span>
        </div>

        {showGoalFlag
          ? (<div className={style.box}>
              <span className={style.solid}>Goal:</span>
                <form onSubmit={goalHandler}>
                    <select
                    className={style.select} required onChange={pregnancyHandler} value={goalState}>
                        <option className={style.p} value={true}>get pregnant</option>
                        <option className={style.p} value={false}>don't get pregnant</option>
                    </select>
                    <button className={style.btn}><i className="fas fa-pencil-alt"/></button>
                </form>
            </div>)
          : < div className={style.box}>
          <span className={`${style.solid}`}>Goal: </span>
          {user.toGetPregnant
            ? <span className={style.p}> get pregnant</span>
            : <span className={style.p}> don't get pregnant</span>}
                <button
                className={style.btn}
                onClick={() => setshowGoalFlag(!showGoalFlag)}
                ><i className="fas fa-pencil-alt"/></button>
            </div>
        }

      {showEmailFlag
        ? (<>
            <form onSubmit={handleAccount}>
              <h1 className={style.solid}>Email partner:</h1>
              <input
              className={style.input}
              type="text"
              placeholder="Email Partner"
              onChange={handlePartnerPassword}
              value={partnerContactState}
              />
              <button className={style.btn}>Add</button>
            </form>
          </>)
        : (<>
          <div className={style.box}>
            <span className={style.solid}>Email partner: </span>
            <span className={style.p}>{user.partnerContact}</span>
            <button
            className={style.btn}
            onClick={() => setshowEmailFlag(!showEmailFlag)}
            ><i className="fas fa-pencil-alt"/></button>
          </div>
          </>)
      }
    </section>
  );
}

export default Account;
