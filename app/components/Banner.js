/**
*	banner
*/
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import Swiper from '../common/Swiper';
import Util from '../utils/Util';

import ActivityPage from '../pages/ActivityPage';

class Banner extends Component{
	constructor(props){
		super(props);
		this.bannerClick = this.bannerClick.bind(this);
	}

	bannerClick(){
		// console.log('----->>>>>input');
		const {onPress} = this.props;
		// Util.transform(navigator, 'ActivityPage', ActivityPage, {data: 'aaaa'});
		// if(navigator){
		// 	navigator.push({
		// 		name: 'ActivityPage',
		// 		component: ActivityPage,
		// 		params: {
		// 			data: 'aaaaaa'
		// 		}
		// 	});
		// }

		onPress&&onPress();
	}

	render(){
		let {banners, height} = this.props;
		return (
			<Swiper height={height}>
			{
				banners&&banners.map((banner, index) => {
					// let src = require(url);
					return (
						<TouchableOpacity key={index} onPress={this.bannerClick} style={styles.imageContent}>
							<Image source={{uri: banner.img}} style={styles.img}/>
						</TouchableOpacity>
					)
					
				})
			}
			
			</Swiper>
		);
	}
}

const styles = StyleSheet.create({
	imageContent:{
		flex:1,
		alignItems: 'stretch'
	},
	img: {
		flex: 1,
		resizeMode: 'stretch',
	}
})

export default Banner;