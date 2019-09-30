import React, {Component} from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
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
    const {conteiner} = styles
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <View style={conteiner}>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
  },
})

export default App
