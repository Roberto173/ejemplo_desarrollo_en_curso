import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Location from './components/pages/Location';
import Pedido from './components/screens/Pedido';


import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/servicios' exact component={Services} />
        <Route path='/encuentrame' exact component = {Location} />
        <Route path='/register' exact component = {SignUp} />
        <Route path='/pedido' exact component = {Pedido} />
       </Switch>
    </Router>
    </>
  );
}

export default App;
