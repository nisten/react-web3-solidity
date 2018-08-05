import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../logo.png'
import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

console.log(Web3.version);
//web3.eth.getBlock(3150).then(console.log);

export default withSiteData(() => (
  <div>
    <div className = "ethBalance">
      Curerntly running web3.js version 
      <button>{web3.version}</button>
    </div>
    <h1 style={{ textAlign: 'center' }}>react-redux-solidity</h1>
    <img src={logoImg} alt="" />
  </div>
))

