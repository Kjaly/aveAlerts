import React, { FC } from 'react';
import './App.css';
import {
  Switch, Route
} from 'react-router-dom'
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


const App: FC = () => {
  return (
    <div className="app">
      <>
      <Header/>
      <Switch>
        <Route path={'/'}>
          <Body/>
        </Route>
      </Switch>
      </>
    </div>
  );
}

export default App;
