import React, {Component} from 'react'
import Header from './src/component/uikit/Header'

class App extends Component {
  state = {
    title: 'Wallet exchange of values',
  }

  render() {
    return <Header title={this.state.title} />
  }
}

export default App
