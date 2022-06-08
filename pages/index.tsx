// ========== Home
// import all modules
import React, { Fragment } from 'react';
import type { NextPage } from 'next';

// import all components
import { Head } from '../components';

const Home: NextPage = () => (
  <Fragment>
    <Head title="Home" />
    <div>
      <h1>Home</h1>
    </div>
  </Fragment>
);

export default Home;
