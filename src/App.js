import React from 'react';

import NavBar from './components/navbar';
import Footer from './components/footer';

import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

export default function App(props) {

  return (
    <div className="container-fluid">
      <NavBar />
      <div className="container-fluid">
        {props.children}
      </div>
      <ScrollUpButton />
      <Footer />
    </div>
  )

}