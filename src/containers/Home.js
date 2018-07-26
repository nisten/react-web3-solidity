import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>react-redux-solidity</h1>
    <img src={logoImg} alt="" />
  </div>
))

