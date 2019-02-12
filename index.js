/** @format */
// react-native run-ios
// react-native run-android

import {
    AppRegistry
} from 'react-native';
import App from './App.jsx';
// 引入应用全局配置
import {
    name as appName
} from './app.json';

// 注册原生应用入口组件
// 告知react-native哪个组件被注册为应用的根容器
AppRegistry.registerComponent(appName, () => App);