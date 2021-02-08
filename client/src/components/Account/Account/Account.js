import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Account.module.css';
import { partnerFetchAC, getPregnantFetchAC } from '../../../redux/actionCreators/partnerAC';

function Account() {
  const user = useSelector((state) => state.auth.user);
  const pregnant = useSelector((state) => state.partner.toGetPregnant);
  const contact = useSelector((state) => state.partner.partnerContact);

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
        <h1>Name: {user.name}</h1>
        <p>Email: {user.email}</p>

        {changeGoal
          ? (<>
              <h1>Goal:</h1>
                <form onSubmit={goalHandler}>
                    <select required onChange={pregnancyHandler} value={toGetPregnant}>
                        <option value={true}>get pregnant</option>
                        <option value={false}>don't get pregnant</option>
                    </select>
                    <button>Change</button>
                </form>
            </>)
          : <h1>Goal:{pregnant ? <p>get pregnant</p> : <p>don't get pregnant</p>}
                <button onClick={() => setChangeGoal(!changeGoal)}>Change</button>
            </h1>
        }

      {changeEmail
        ? (<>
            <form onSubmit={handleAccount}>
              <h1>Email partner:</h1>
              <input type="text" placeholder="Email Partner" onChange={handlePartnerPassword} value={partnerEmail}/>
              <button>Add</button>
            </form>
          </>)
        : (<>
            <h1>Email partner: {contact}</h1>
            <button onClick={() => setChangeEmail(!changeEmail)}>Change</button>
          </>)
      }
    </section>
  );
}

export default Account;
