import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const Header = props => {
  const {viewStyle, textStyle} = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#1b5193',
    height: 116,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
    // margin: 10,
  },
})

export {Header}
