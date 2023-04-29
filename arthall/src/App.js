import React from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header';
import MainArea from './mainArea';
import Performance from './components/performance';
import Rent from './components/rent';
import Academy from './components/academy';
import Membership from './components/membership';
import Visiting from './components/visiting';
import Customer from './components/customer';
import Footer from './footer';
import Introduction from './components/introduction';


function App() {
  return (
    <div style={{width:'100%'}}>
      <Header />
      <div> {/* 화면에 보이는 부분 */}
        <Route path='/' exact={true} component={MainArea}></Route>
        <Route path='/components/performance' component={Performance}></Route>
        <Route path="/components/rent" component={Rent}></Route>
        <Route path="/components/academy" component={Academy}></Route>
        <Route path="/components/membership" component={Membership}></Route>
        <Route path="/components/visiting" component={Visiting}></Route>
        <Route path="/components/customer" component={Customer}></Route>
        <Route path="/components/introduction" component={Introduction}></Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;

