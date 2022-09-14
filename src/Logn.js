import React, { Component } from 'react';
import { render } from 'react-dom';
import Tabs from "./Tabs";
import Tab from "./Tab";
import Sign from './Sign';
import Rigester from './Rigester';
// import './style.css';

class Logn extends Component {

  render() {
    return (
      <Tabs>
        <Tab value="banana" header="Banana HeadersS" >
          <Sign/>
        </Tab>
        <Tab value="apple" header="Apple Header">
          <Rigester/>
        </Tab>
      </Tabs>
    );
  }
}


export default Logn;