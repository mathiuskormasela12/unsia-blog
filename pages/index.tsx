// ========== Home
// import all modules
import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { HeroHome } from '../styles';

// import all components
import {
  Head, Navbar, Container, Button,
} from '../components';
import { IGlobalStates } from '../interfaces';
import { setToken } from '../redux/actions';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const accessToken: string = useSelector((current: IGlobalStates) => current.auth.accessToken);

  const handleToken = () => {
    if (accessToken !== '') {
      dispatch(setToken('', ''));
    } else {
      dispatch(setToken(String(Date.now()), String(Date.now())));
    }
  };

  return (
    <Fragment>
      <Head title="Mathius" />
      <HeroHome>
        <Navbar />
        <Container>
          <h1>Home</h1>
          <Button type="button" size="lg" onClick={handleToken}>Test</Button>
          <p>ssk</p>
          <h1>Home</h1>
          <p>ssk</p>
          <h1>Home</h1>
          <p>ssk</p>
          <h1>Home</h1>
          <p>ssk</p>
          <h1>Home</h1>
          <p>ssk</p>
          <h1>Home</h1>
          <p>ssk</p>

          <h1>Home</h1>
          <p>ssk</p>
          <h1>Home</h1>
          <p>ssk</p>
        </Container>
      </HeroHome>
    </Fragment>
  );
};

export default Home;
