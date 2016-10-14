
/*
import React, { Component } from 'react';
import {
	AppRegistry,
	PropTypes,
	StyleSheet,
	Text,
	View,
	Navigator,
	TextInput,
	ListView,
	Dimensions,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

export class App extends Component{
	constructor(props){
		super(props);
		this.setText = this.setText.bind(this);
	}
	setText(text){
		this.props.actions.testAction(text);
	}
	render(){
		return (
			<View>
				<TextInput
					placeholder="测试text"
					multiline={true}
					keyboardType='default'
					onChangeText={(text) => {this.setText(text)}}
					/>
				<Text>
					{this.props.test.text}
				</Text>
			</View>
		);
	}
}

function mapStateToProps(state){
	return {
		test: state.test
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Navigator} from 'react-native';

import SplashPage from '../pages/SplashPage';

export default class App extends Component{

	constructor(props){
		super(props);
		this.configureScene = this.configureScene.bind(this);
	}

	/**
	 * 配置场景动画
	 * @param route 路由
	 * @param routeStack 路由栈
	 * @returns {*} 动画
	 */
	configureScene(route, routeStack) {
	  if (route.type == 'Bottom') {
	    return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
	  }
	  return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
	}

	render() {
		let defaultName = 'Splash';
		let defaultComponent = SplashPage;

		return (
			<Navigator
				initialRoute={{name: defaultName, component: defaultComponent}}
				configureScene={(route, routeStack) => this.configureScene(route, routeStack)}
				renderScene={(route, navigator) => {
					let Component = route.component;
					// console.log(Component.name);
					return (<Component {...route.params} navigator={navigator}/>);
				}}/>
		);
	}
}