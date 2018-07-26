
import React from 'react'
import { connect } from 'react-redux'
//

// /////////////////////////////////////////////////////////
// Redux components
// From http://redux.js.org/docs/basics/UsageWithReact.html
// Display component
const Counter = ({ count, increment, reset }) => (
  <div>
    <p>Value: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
  </div>
)
// Connexion with redux
const CounterConnected = connect(
  ({ counter: { count } }) => ({ count }),
  dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }),
)(Counter)

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const abi = [{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"payable":false,"type":"fallback"}];
const address = "0x3E2A850420e024d2f269d45F85a24Dc6F586277D";
const deployedContract = web3.eth.contract(abi).at(address);
const filter = web3.eth.filter('latest');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blockNumber: web3.eth.blockNumber,
      ...deployedContract
    }
  }
  componentDidMount(){
    filter.watch((error, result) =>{
      const block = web3.eth.getBlock(result, true);
      this.setState({blockNumber: block.number});
    });
  }

// /////////////////////////////////////////////////////////
// Actual container
const About = () => (
  <div>
    <h1>This is what we're all about.</h1>
    <p>
      React, static sites, performance, speed. It's the stuff that makes us
      tick.
    </p>
    <h2>Here is a redux counter:</h2>
    <CounterConnected />
  </div>
)

export default About
