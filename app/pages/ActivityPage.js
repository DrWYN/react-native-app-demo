/**
*	活动页
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

import Util from '../utils/Util';

import Banner from '../components/Banner';

import ProductDetail from '../pages/ProductDetail';

const phone_width = Dimensions.get('window').width;

class ProductItem extends Component{
	constructor(props){
		super(props);
	}
	goToDetail(){
		const {navigator} = this.props;

		Util.transform(navigator, 'productDetail', ProductDetail, null);
	}
	render(){

		let {product} = this.props;
		return (
			<TouchableOpacity activeOpacity={1} style={styles.productContent} onPress={this.goToDetail.bind(this)}>
				<View style={styles.productImgContent}>
					<Image source={{uri: product.img}} style={styles.productImage}/>
				</View>
				<View style={{flex: 1}}>
					<Text numberOfLines={2}>{product.name}</Text>
				</View>
				<View style={[styles.row, styles.productPriceContent]}>
					<Text style={styles.cPrice}>￥{product.price}</Text>
					<Text style={styles.oPrice}>￥{product.origPrice}</Text>
				</View>
				<View style={styles.buyView}>
					<Button text="立即购买" style={styles.buyButton} textStyle={styles.buyButtonText} onPress={this.goToDetail.bind(this)}/>
				</View>
			</TouchableOpacity>
		);
	}
}

class ActivityPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			id: 0 
		}
	}
	bannerPress(){

	}
	renderBanner(){
		let banners = [{img: 'http://up.test.pajk.cn/v1/tfs/T1BsDlB7JT1RCvBVdK_640x300.jpg'}, {img: 'http://up.test.pajk.cn/v1/tfs/T1usDlBvZT1RCvBVdK_640x300.jpg'}]
		return (
			<Banner height={150} banners={banners}  onPress={this.bannerPress.bind(this)}/>
		);
	}
	tagButtonPress(id){
		this.setState({id: id});
	}
	renderTagContent(){

		let data = [
			{id: 1, tag: 'aaa'},
			{id: 2, tag: 'bbb'},
			{id: 3, tag: 'cccccccccccc'},
		];

		return (
			<View style={styles.tagContent}>
			{
				data&&data.map((item, index) => {
					let style = item.id === this.state.id ? styles.tagButtonActive : styles.tagButton;
					return (
						<View style={styles.tagButtonContent} key={index}>
							<Button text={item.tag} style={style} onPress={this.tagButtonPress.bind(this, item.id)}/>
						</View>
					)
				})
			}
			</View>
		)
	}

	renderBody(){
		let products = [
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

			let data1 = {id: 1, tag: 'aaa', products: products};
			let data2 = {id: 2, tag: 'bbb', products: products};
			let data3 = {id: 3, tag: 'cccccccccccc', products: products};

			let datas = [data1, data2, data3];
			let data = {};
			datas.some((item, index) => {
				if(this.state.id&&this.state.id === item.id){
					data = item;
					return true;
				}
				return false;
			});

			return (
				<View>
					<View style={styles.bodyTitle}>
						<Text numberOfLines={1}>{data.tag}</Text>
					</View>
					<View style={styles.bodyProductContent}>
						{
							data.products&&data.products.map((product, index) => {
								return (
									<View style={styles.bodyProduct} key={index}>
										<ProductItem product={product} navigator={this.props.navigator}/>
									</View>
								)
							})
						}
					</View>
				</View>
			)

	}

	render(){
		return (
			<View style={styles.container}>
				<ScrollView>
					{this.renderBanner()}
					{this.renderTagContent()}
					{this.renderBody()}
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
	row: {
		flexDirection: 'row',
	},
	tagContent: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	tagButtonContent: {
		width: phone_width*0.25,
		maxWidth: 100,
		height: 45,
		padding: 5,
	},
	tagButton: {
		flex: 1,
		padding: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#eee'
	},
	tagButtonActive: {
		flex: 1,
		padding: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#ff6f00'
	},
	bodyTitle: {
		backgroundColor: '#fff',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bodyProductContent: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
	},
	bodyProduct: {
		width: phone_width*0.5,
		maxWidth: 200,
		height: 270,
		padding: 1,
	},
	productContent: {
		flex: 1,
		padding: 5,
		backgroundColor: '#fff',
	},
	productImgContent: {
		alignItems: 'center',
	},
	productImage: {
		width: 130,
		height: 130,
		resizeMode: 'stretch',
	},
	productPriceContent: {
		alignItems: 'flex-end',
	},
	cPrice: {
		color: '#ff6f00',
		fontSize: 15,
	},
	oPrice: {
		fontSize: 10,
		marginLeft: 10,
		textDecorationLine: 'line-through',
	},
	buyView: {
		justifyContent: 'center',
		alignItems: 'stretch',
		padding: 5
	},
	buyButton: {
		backgroundColor: '#ff6f00',
		alignItems: 'center',
		justifyContent: 'center',
		height: 30,
		borderRadius: 2,
	},
	buyButtonText: {
		color: '#fff'
	}
})


export default ActivityPage;