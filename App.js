import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
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
    console.log('h, w', h, w)
    console.log('url', url)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      this.setState({data})
    } catch (e) {
      throw e
    }
  }

  render() {
    const {title, data} = this.state
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          {data.map(item => (
            <ImageCard data={item} key={item.id} />
          ))}
        </ScrollView>
      </View>
    )
  }

  /*  render() {
    const {title, data} = this.state
    console.log('data', data)
    return (
      <View>
        <Header title={title} />
        <View>
          {data.map(item => {
            console.log('item', item)

            <ImageCard data={item} />
            // <ImageCard data=(item) />
          })}
        </View>

      </View>
    )
  }*/
}

export default App
