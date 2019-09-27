import React, {Component} from 'react'
import {View} from 'react-native'
import {Header, ImageCard} from './src/component/uikit/'
import {h, w} from './constans'

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json'

class App extends Component {
  state = {
    title: 'Wallet exchange of values',
    data: [],
  }

  componentDidMount = async () => {
    console.log(h, w)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      this.setState({data})
    } catch (e) {
      throw e
    }
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Header title={this.state.title} />
        <ImageCard />
      </View>
    )
  }
}

export default App
