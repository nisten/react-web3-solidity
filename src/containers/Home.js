import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../logo.png'
import Web3 from '../../node_modules/web3';


export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>react-redux-solidity</h1>
    <img src={logoImg} alt="" />
  </div>
))

