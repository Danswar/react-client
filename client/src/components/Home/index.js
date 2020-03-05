import React from 'react';
import { useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

function Home() {

  const reduxTest = useSelector(state => state.test);

  return (
    <div>
      <h1>Bienvenido, happy hack!!</h1>
      <h2>Redux: {reduxTest.msg}</h2>
      <h2>React Router: <Link to="/">to root</Link> - <Link to="/other">to other</Link> </h2>
      <Switch>
        <Route exact path="/">
          Hello from router from root page
        </Route>
        <Route exact path="/other">
          Hello from router from other page
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
