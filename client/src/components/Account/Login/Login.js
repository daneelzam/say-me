import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
        <div>
            <form>
              <label htmlFor="email">
                  Email:
                  <input name="email" type="text" value={email} onChange={handleEmail} required/>
              </label>
                <label htmlFor="password">
                    Password:
                    <input name="password" type="password" value={password} onChange={handlePassword} required/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
  );
}

export default Login;
