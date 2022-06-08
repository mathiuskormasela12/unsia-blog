/* eslint-disable max-len */
// ========== Login
// import all modules
import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { IGlobalStates } from '../interfaces';
import { setToken, setTokenTemporary } from '../redux/actions';

// import all components
import { Head } from '../components';

const Login: NextPage = () => {
  const dispatch = useDispatch();
  const accessToken: string = useSelector((states: IGlobalStates) => states.auth.accessToken);
  const accessTokenTemp: string = useSelector((states: IGlobalStates) => states.authTemporary.accessToken);

  const handleSetToken = () => {
    if (accessToken === '') {
      dispatch(setToken(String(Date.now()), String(Date.now())));
    } else {
      dispatch(setToken('', ''));
    }
  };

  const handleSetTempToken = () => {
    if (accessTokenTemp === '') {
      dispatch(setTokenTemporary(String(Date.now()), String(Date.now())));
    } else {
      dispatch(setTokenTemporary('', ''));
    }
  };

  return (
    <Fragment>
      <Head title="Login" />
      <div>
        <h1>Login</h1>
        <button type="button" onClick={handleSetToken}>Set Token</button>
        {accessToken !== '' && (
        <p>
          Token ada
        </p>
        )}
        <button type="button" onClick={handleSetTempToken}>Set Temp Token</button>
        {accessTokenTemp !== '' && <p>Temp Token Ada</p>}
      </div>
    </Fragment>
  );
};

export default Login;
