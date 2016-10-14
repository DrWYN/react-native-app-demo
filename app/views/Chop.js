//今日剁手价模块
import React, {PropTypes, Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Dimensions
} from 'react-native';

import IconFontText from '../common/IconFontText';
import Util from '../utils/Util';

import ChopProducts from '../pages/ChopProducts';
import ProductDetail from '../pages/ProductDetail';

import CountDown from '../components/CountDown';

const phone_width = Dimensions.get('window').width;

class Chop extends Component{
	constructor(props){
		super(props);
		this.goToChop = this.goToChop.bind(this);
	}

	goToChop(){
		const {navigator} = this.props;

		Util.transform(navigator, 'chopProducts', ChopProducts, null);
	}

	goToProductDetail(){
		const {navigator} = this.props;

		Util.transform(navigator, 'productDetail', ProductDetail, null);
	}

	render(){
		let {data} = this.props;
		let {products} = data;

		let systime = new Date().getTime();
		let endTime = systime + 60*60*1000;

		return (
			<View style={styles.chopContainer}>
				<TouchableOpacity style={styles.topContainer} activeOpacity={1} onPress={this.goToChop}>
					<View style={styles.topLeft}>
						<Image source={require('../../images/icon_today_cut.png')} style={styles.topImage}/>
						<CountDown systime={systime} endTime={endTime}/>
					</View>
					<Text>更多</Text>
					<IconFontText icon="angle-right"/>
				</TouchableOpacity>
			 	<ScrollView horizontal={true}>
			 	{
					products&&products.map((item, index) => {
						return (
							<TouchableOpacity style={styles.chopItem} key={index} activeOpacity={1} onPress={this.goToProductDetail.bind(this)}>
								<Image source={{uri: item.img}} style={styles.chopImage}/>	
								<View style={styles.textContent}>
									<Text numberOfLines={1} style={styles.chopName}>{item.name}</Text>
									<Text numberOfLines={1} style={styles.cPrice}>{'￥' + item.price}</Text>
									<Text numberOfLines={1} style={styles.oPrice}>{'￥' + item.origPrice}</Text>
								</View>						
							</TouchableOpacity>
						);
					})
			 	}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	chopContainer: {
		width: phone_width,
		backgroundColor: '#fff',
		marginTop: 8,
	},
	topContainer: {
		flexDirection: 'row',
		alignItems:'center',
		paddingLeft: 10,
		paddingRight: 10, 
	},
	topLeft: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	topImage: {
		width: 85,
		resizeMode: 'contain',
		marginRight: 10
	},
	chopItem: {
		width: phone_width*0.3,
		padding: 5,
		alignItems:'center',
      	justifyContent:'flex-start',
	},
	chopImage: {
		width: 100,
        height: 100,
        resizeMode: 'stretch',
	},
	textContent: {
		justifyContent: 'flex-start',
	},
	chopName: {
		fontSize: 13,
	},
	cPrice: {
		fontSize: 14,
		color: '#ff6f00',
	},
	oPrice: {
		fontSize: 10,
		textDecorationLine: 'line-through',
	}
})

export default Chop;