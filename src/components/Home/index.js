import React from 'react';

import { useSelector } from "react-redux";

function Home() {

  const reduxTest = useSelector(state => state.test);

  return (
    <div>
      <h1>Bienvenido, happy hack!!</h1>
      <h2>Redux: {reduxTest.msg}</h2>
    </div>
  );
}

export default Home;
