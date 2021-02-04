import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
        <form>
            <label htmlFor="name">
                Name:
                <input name="name" type="text" onChange={handleName} value={name}/>
            </label>
            <label htmlFor="email">
                Email:
                <input name="email" type="text" onChange={handleEmail} value={email}/>
            </label>
            <label htmlFor="password">
                Password:
                <input name="password" type="password" onChange={handlePassword} value={password}/>
            </label>
            <button type="submit">Sign Up</button>
        </form>
  );
}

export default SignUp;
