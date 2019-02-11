/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (<View style={
      // 多个样式就以数组形式列出，后覆盖前
      [styles.container, styles.bgColorRed]
    } >
      < Text
        style={
          styles.welcome
        }
      > Welcome to React Native —— Ranjay! </Text>
      < Text
        style={
          styles.instructions
        }
      > To get started, edit App.js </Text>
      <Text
        style={
          styles.instructions
        }
      > {
          instructions
        } </Text>
    </View>
    );
  }
}

// 定义react-native样式
// 一个选择器的样式就是一个JS对象
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bgColorRed: {
    backgroundColor: '#fff'
  }
});