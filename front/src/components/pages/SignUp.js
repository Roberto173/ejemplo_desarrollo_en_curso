import React from 'react';
import '../../App.css';


import { BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

function SignUp(props) {
  console.log(props);
  return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/login">
              <LoginScreen />
            </Route>
            <Route exact path="/register">
              <RegisterScreen />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default SignUp;

