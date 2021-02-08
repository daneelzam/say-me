import React, { useState } from 'react';
import './Account.css';
import { useDispatch, useSelector } from 'react-redux';
import { partherAC } from '../../../redux/actionCreators/partnerAC';

function Account() {
  const user = useSelector((state) => state.auth.user);
  const [partherPassword, setPartherPassword] = useState();
  const dispatch = useDispatch();

  function hadlePartnerPassword(event) {
    setPartherPassword(event.target.value);
  }

  function handleAccount(event) {
    event.preventDefault();
    fetch(`http://localhost:4000/api/main/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jason'
      },
      body: JSON.stringify({ partherPassword })
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch(partherAC(result));
      });
  }

  return (
  <section id="main" className="container">
    <span className="avatar"><img src="images/avatar.jpg" alt="" /></span>
    <h1>Name: {user.name}</h1>
    <p>Email: {user.email}</p>
    <h1>Goal:</h1>
   <form onSubmit={handleAccount}>
     <select>
       <option>get pregnant</option>
       <option>don't get pregnant</option>
     </select>
     <h1>Email partner</h1>
     <input type="text" placeholder="Email Partner" onChange={hadlePartnerPassword} value={partherPassword}/>
     <button>Add</button>
   </form>
  </section>
  );
}

export default Account;
