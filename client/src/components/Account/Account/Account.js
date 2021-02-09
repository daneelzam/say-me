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

  const [changeGoal, setChangeGoal] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);

  const dispatch = useDispatch();

  function handlePartnerPassword(event) {
    setPartnerEmail(event.target.value);
  }

  const pregnancyHandler = () => {
    setToGetPregnant((prevState) => !prevState);
  };

  const goalHandler = (event) => {
    event.preventDefault();
    dispatch(getPregnantFetchAC(toGetPregnant, user.id));
    setChangeGoal((prevState) => !prevState);
  };

  function handleAccount(event) {
    event.preventDefault();
    setChangeEmail(!changeEmail);
    dispatch(partnerFetchAC(partnerEmail, user.id));
  }

  return (

    <section className={style.main}>
        <span><img src="images/avatar.jpg" alt=""/></span>
        <h1 className={style.solid}>Name: {user.name}</h1>
        <h1 className={style.solid}>Email: {user.email}</h1>

        {changeGoal
          ? (<>
              <h1 className={style.solid}>Goal:</h1>
                <form onSubmit={goalHandler}>
                    <select required onChange={pregnancyHandler} value={toGetPregnant}>
                        <option value={true}>get pregnant</option>
                        <option value={false}>don't get pregnant</option>
                    </select>
                    <button className={style.btn}><i className="fas fa-pencil-alt"/></button>
                </form>
            </>)
        // eslint-disable-next-line max-len
          : <h1 className={`${style.lines} ${style.solid}`}>Goal:{pregnant ? <p className={style.solidp}>get pregnant</p> : <p className={style.solidp}>don't get pregnant</p>}
                <button className={style.btn}
                        onClick={() => setChangeGoal(!changeGoal)}><i className="fas fa-pencil-alt"/></button>
            </h1>
        }

      {changeEmail
        ? (<>
            <form onSubmit={handleAccount}>
              <h1 className={style.solid}>Email partner:</h1>
              <input type="text" placeholder="Email Partner" onChange={handlePartnerPassword} value={partnerEmail}/>
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
