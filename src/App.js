import React from 'react'
import { Router, Link } from 'react-static'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { web3Connect } from '../reducers/web3'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import store from './connectors/redux'
import Web3 from 'web3'
import './app.css'


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  </Provider>
)

const mapDispatchToProps = {
	  web3Connect
}

const mapStateToProps = (state) => ({
})

export default hot(module)(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
