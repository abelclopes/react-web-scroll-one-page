import React from 'react';
import NavigateLinks from './navigateScroll';
import { NavItem } from 'react-bootstrap';
import "animate.css/animate.min.css";
import './App.css';
import PageScroll from './pages/PageScroll';

const Section = (props) => {
  return (
    <div className={props.className} id={props.id}>
      {props.children}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <NavigateLinks />
      <PageScroll/>
    </div>
  );
}

export default App;
