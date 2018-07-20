import {Router, Link, withRouteData } from 'react-static'
import { withRouteData, Link } from 'react-static'
import  Web3 from '../../node_modules/web3'

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 =new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  }
