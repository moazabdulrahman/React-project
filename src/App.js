import React, {Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Navbar from './component/Navbar/Navbar'
import AllComponent from './component/AllComponent'
import Contact from './component/Contact/Contact'

import './App.css';

class App  extends Component {
render(){
  return (
    <BrowserRouter>
       <Navbar />  
       <Route exact path ='/' component={AllComponent} />
       <Route path ='/contact' component={Contact} />
    </BrowserRouter>
  );
}
}

export default App;
