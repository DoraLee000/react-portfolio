import React, { Component } from 'react';
import {HashRouter as Router , Route} from 'react-router-dom';
import logo from './logo.svg';
import './main.css';
import Header from'./Header';
import FilterForm from'../routes/Attractions/FilterForm';
import About from'../routes/About/About';
import Blog from'./Blog';
import Footer from'./Footer';
const Main = () =>(
  <Router>
    <div>
    <Header/>
    <Route path="/FilterForm" exact component={FilterForm}/>
    <Route path="/About" exact component={About}/>
    <Route path="/Blog/" exact component={Blog} />
    <Footer/>
    </div>
  </Router>
)
export default Main;
