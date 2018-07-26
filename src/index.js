import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
//export default App
export class App extends Component {
  componentWillMount () {
    this.props.web3Connect() // initiate web3 existence check. metamask compatibility
}

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
console.log(web3.version);


// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  web3Connect: React.PropTypes.func.isRequired //make sure to add proptypes everyone!
}
