import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import Swiper from '../common/Swiper';
import TestNavigator from './TestNavigator';
import Util from '../utils/Util';

export default class InquiryPage extends Component{
	testSwiperPress(){
		const {navigator} = this.props;
		Util.transform(navigator, 'test', TestNavigator, {data: 'aaa'});
		// if(navigator){
		// 	navigator.push({
		// 		name: 'test',
		// 		component: TestNavigator,
		// 		params: {
		// 			data: 'aaaaaa'
		// 		}
		// 	});
		// }
	}
	render(){
		return (
			<View style={styles.container}>
				<Text>InquiryPage</Text>
				<Swiper height={100}>
					<TouchableOpacity style={[styles.page,{backgroundColor: '#9DD6EB'}]} onPress={this.testSwiperPress.bind(this)}>
						<Text>page1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.page,{backgroundColor: '#97CAE5'}]}>
						<Text>page2</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.page,{backgroundColor: '#92BBD9'}]}>
						<Text>page3</Text>
					</TouchableOpacity>
				</Swiper>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	page: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});