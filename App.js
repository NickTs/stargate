import React, {Component} from 'react'
import Header from './src/component/uikit/Header'

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json'

class App extends Component {
  state = {
    title: 'Wallet exchange of values',
    data: [],
  }

  componentDidMount = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    // console.log(data)
    this.setState({data})
  }

  render() {
    console.log(this.state)
    return <Header title={this.state.title} />
  }
}

export default App
