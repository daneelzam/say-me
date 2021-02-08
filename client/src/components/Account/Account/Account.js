import React, { useState } from 'react';
import './Account.css';
import { useDispatch, useSelector } from 'react-redux';

import { partnerAC, pregnantAC } from '../../../redux/actionCreators/partnerAC';

function Account() {
  const user = useSelector((state) => state.auth.user);
  const [partnerEmail, setPartnerEmail] = useState();
  const [toGetPregnant, setToGetPregnant] = useState(true);
  const dispatch = useDispatch();

  function handlePartnerPassword(event) {
    setPartnerEmail(event.target.value);
  }

  const pregnancyHandler = (event) => {
    if (event.target.value === 'get pregnant') {
      setToGetPregnant(true);
    } else {
      setToGetPregnant(false);
    }
  };

  const goalHandler = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/main/goal/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ toGetPregnant })
    })
      .then((response) => (response.status === 200
        ? dispatch(pregnantAC(toGetPregnant))
        : null));
  };

  function handleAccount(event) {
    event.preventDefault();
    // console.log(parnerPassword);
    fetch(`http://localhost:4000/api/main/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: partnerEmail })
    })
      .then((response) => (response.status === 200
        ? dispatch(partnerAC(partnerEmail))
        : null));
  }

  return (
    <section id="main" className="container">
        <span className="avatar"><img src="images/avatar.jpg" alt=""/></span>
        <h1>Name: {user.name}</h1>
        <p>Email: {user.email}</p>
        <h1>Goal:</h1>
        <form onSubmit={goalHandler}>
            <select onChange={pregnancyHandler}>
                <option>get pregnant</option>
                <option>don't get pregnant</option>
            </select>
            <button>Confirm</button>
        </form>

        <form onSubmit={handleAccount}>
            <h1>Email partner</h1>
            <input type="text" placeholder="Email Partner" onChange={handlePartnerPassword} value={partnerEmail}/>
            <button>Add</button>
        </form>
    </section>
  );
}

export default Account;
