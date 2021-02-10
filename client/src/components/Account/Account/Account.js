import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Account.module.css';
import { partnerFetchAC, getPregnantFetchAC } from '../../../redux/actionCreators/partnerAC';

function Account() {
  const user = useSelector((state) => state.auth.user);
  const pregnant = useSelector((state) => state.partner.toGetPregnant);
  // const contact = useSelector((state) => state.partner.partnerContact);

  const [partnerEmail, setPartnerEmail] = useState();
  const [toGetPregnant, setToGetPregnant] = useState(true);

  const [partnerContactState, setPartnerContactState] = useState(user.partnerContact);
  const [goalState, setGoalState] = useState(toGetPregnant);

  const dispatch = useDispatch();

  function handlePartnerPassword(event) {
    setPartnerContactState(event.target.value);
  }

  const pregnancyHandler = () => {
    setToGetPregnant((prevState) => !prevState);
  };

  const goalHandler = (event) => {
    event.preventDefault();
    dispatch(getPregnantFetchAC(goalState, user.id));
    setshowGoalFlag((prevState) => !prevState);
  };

  function handleAccount(event) {
    event.preventDefault();
    setChangeEmail(!changeEmail);
    dispatch(partnerFetchAC(partnerEmail, user.id));
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

        {changeGoal
          ? (<div className={style.box}>
               <span className={style.solid}>Goal:</span>
                <form onSubmit={goalHandler}>
                    <select required onChange={pregnancyHandler} value={toGetPregnant}>
                        <option className={style.p} value={true}>get pregnant</option>
                        <option className={style.p} value={false}>don't get pregnant</option>
                    </select>
                    <button className={style.btn}><i className="fas fa-pencil-alt"/></button>
                </form>
            </div>)
        // eslint-disable-next-line max-len
          : < div className={style.box}> <span className={`${style.lines} ${style.solid}`}>Goal: </span> {pregnant ? <span className={style.p}>get pregnan</span> : <span className={style.p}>don't get pregnant</span>}
                <button className={style.btn}
                        onClick={() => setChangeGoal(!changeGoal)}><i className="fas fa-pencil-alt"/></button>
            </div>
        }

      {changeEmail
        ? (<>
            <form onSubmit={handleAccount}>
              <h1 className={style.solid}>Email partner:</h1>
              <input className={style.p} type="text" placeholder="Email Partner" onChange={handlePartnerPassword} value={partnerEmail}/>
              <button className={style.btn}>Add</button>
            </form>
          </>)
        : (<>
            <h1 className={style.solid}>Email partner: {user.partnerContact}
            <button className={style.btn}
                    onClick={() => setChangeEmail(!changeEmail)}><i className="fas fa-pencil-alt"/></button>
            </h1>
          </>)
      }
    </section>

  );
}

export default Account;
