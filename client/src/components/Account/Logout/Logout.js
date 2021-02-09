import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutFetchAC } from '../../../redux/actionCreators/authAC';
import { clearLocalStorageAC } from '../../../redux/actionCreators/calendarAC';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutFetchAC());
    dispatch(clearLocalStorageAC());
  });

  return (
        <div>

        </div>
  );
}

export default Logout;
