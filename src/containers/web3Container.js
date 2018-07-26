export class App extends Component {
  componentWillMount () {
    this.props.web3Connect() // initiate web3 existence check. metamask compatibility
  }

  render () { ... }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  web3Connect: React.PropTypes.func.isRequired //make sure to add proptypes everyone!
}
