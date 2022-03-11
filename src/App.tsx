import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Navbar} from './components/index';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {Pages1, Pages2} from './pages/index'

class App extends Component{
  render(){
    return(
      
      <div style={{backgroundColor:'green',}}>
          <BrowserRouter> 
          <Navbar/>   
            <Routes>           
              <Route path="/page1" element={<Pages1 />} />
              <Route path="/page2" element={<Pages2/>} />
          </Routes>
          </BrowserRouter>  
          
      </div>
      
    )
  }
}


export default App;
