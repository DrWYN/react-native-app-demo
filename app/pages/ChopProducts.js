/**
*	剁手价活动页
*/
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TextInput,
	ListView,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import IconFontText from '../common/IconFontText';
import Button from '../common/Button';

import CountDown from '../components/CountDown';

class ProductItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let {product} = this.props;
		return (
			<View style={styles.itemContent}>
				<Image source={{uri: product.img}} style={styles.productImage}/>
				<View style={styles.productTextContent}>
					<Text>{product.name}</Text>
					<Text style={styles.healthGoldText}>健康金可抵￥{product.healthGoldDeductibleAmount}</Text>
					<View style={styles.priceLineContent}>
						<View style={styles.priceContent}>
							<Text>￥{product.price}</Text>
							<Text style={styles.oPrice}>￥{product.origPrice}</Text>
						</View>
						<Button text={product.available > 0 ? '马上抢' : '已抢光'} style={styles.buyButton} textStyle={{color: '#fff'}}/>
					</View>
				</View>
			</View>
		);
	}
}

class ChopProducts extends Component{
	constructor(props){
		super(props);
	}
	renderProductList(){
		let data = [
				{
					available: 1,
					origPrice: 1000,
					price: 500,
					healthGoldDeductibleAmount: 385,
					id: 20019529,
					storeId: 2452910006,
					tag: null,
					img: "http://up.test.pajk.cn/v1/tfs/T1RWhlB_AT1RCvBVdK_321x321.jpg",
					name: "40-5商城优惠券",

				},
				{
					available: 1,
					origPrice: 1000,
					price: 2000,
					healthGoldDeductibleAmount: 300,
					id: 20040614,
					storeId: 2452910006,
					tag: null,
					img: "http://up.test.pajk.cn/v1/tfs/T1TaKTBgAT1RCvBVdK_321x321.jpg",
					name: "钙维E软胶囊2盒",

				},
				{
					available: 0,
					origPrice: 1000,
					price: 1000,
					healthGoldDeductibleAmount: 385,
					id: 20032341,
					storeId: 2561870503,
					tag: null,
					img: "http://up.test.pajk.cn/v1/tfs/T1RWhlB_AT1RCvBVdK_321x321.jpg",
					name: "锌硒宝片0.25g*80s*3瓶 ",

				},
				{
					available: 100,
					origPrice: 1000,
					price: 1000,
					healthGoldDeductibleAmount: 385,
					id: 20027321,
					storeId: 1068470605,
					tag: null,
					img: "http://up.test.pajk.cn/v1/tfs/T1RWhlB_AT1RCvBVdK_321x321.jpg",
					name: "感冒药1",

				},
				{
					available: 100,
					origPrice: 1000,
					price: 1000,
					healthGoldDeductibleAmount: 385,
					id: 20027321,
					storeId: 1068470605,
					tag: null,
					img: "http://up.test.pajk.cn/v1/tfs/T1RWhlB_AT1RCvBVdK_321x321.jpg",
					name: "感冒药1",

				},
			];

			return (
				<View>
				{
					data&&data.map((product, index) => {
						return <ProductItem key={index} product={product}/>
					})
				}
				</View>
			)

	}
	render(){
		let systime = new Date().getTime();
		let endTime = systime + 60*60*1000;
		return (
			<View style={styles.container}>
				<View style={styles.stickTop}>
					<Text style={styles.topText}>距离本场结束还有：</Text>
					<CountDown systime={systime} endTime={endTime} textStyle={styles.countTextStyle} dotStyle={{color: '#fff'}}/>
				</View>
				<ScrollView>
				{this.renderProductList()}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
	},
	stickTop: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#83766e',
	},
	topText: {
		color: '#fff',
	},
	countTextStyle: {
		backgroundColor: '#fff',
		color: '#83766e'
	},
	itemContent: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		marginBottom: 1,
	},
	productImage: {
		width: 80,
		height: 80,
		resizeMode: 'stretch'
	},
	productTextContent: {
		flex: 1,
	},
	healthGoldText: {
		fontSize: 12,
		color: '#ff6f00',
	},
	priceLineContent: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	priceContent: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	oPrice: {
		fontSize: 10,
		marginLeft: 10,
		textDecorationLine: 'line-through',
	},
	buyButton: {
		backgroundColor: '#ff6f00',
		paddingLeft:5,
		paddingRight: 5,
		marginRight: 10,
		borderRadius: 3,

	}
})

export default ChopProducts;