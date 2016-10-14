import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

import MainPage from './MainPage';

export default class SplashPage extends Component{
	componentWillMount(){
		let {navigator} = this.props;
		setTimeout(() => {
			navigator.replace({
				name: 'MainPage',
				component: MainPage,
				params: {
					navigator: navigator
				}
			})
		}, 1000);
	}

	render(){
		return (
			<View style={styles.container}>
				<Image
					style={styles.splashImage}
					source={require('../../images/splash.jpg')}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	splashImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		resizeMode: 'stretch',
		width: null,
		height: null
	}
});