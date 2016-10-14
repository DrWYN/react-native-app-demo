/**
*	我的订单
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

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

const phone_width = Dimensions.get('window').width;

class OrderPage extends Component{
	constructor(props){
		super(props);
	}
	getStatus(status){
		let res = '';
		switch(status){
			case 0:
				res = '已完成';
			break;
			case 1: 
				res = '待付款';
			break;
			case 2:
				res = '进行中';
			break;
			case 3:
				res = '已取消';
			break;
			default:
				res = '';
			break;
		}
		return res;
	}
	render(){
		let {data} = this.props;
		return (
			<ScrollView style={styles.container}>
			{
				data&&data.map((item, index) => {
					return (
						<View style={styles.itemContent} key={index}>
							<View style={styles.topContent}>
								<View style={styles.titleContent}>
									<Text numberOfLines={1}>{item.company}</Text>
									<Text numberOfLines={1}>{item.time}</Text>
								</View>
								<Text numberOfLines={1}>{this.getStatus(item.status)}</Text>
							</View>
							<TouchableOpacity style={styles.bodyContent}>
								<Image source={{uri: item.img}} style={styles.image}/>
								<Text numberOfLines={1} style={styles.title}>{item.title}</Text>
								<Text>共{item.number}件 <IconFontText icon="angle-right"/></Text>
							</TouchableOpacity>
							<View>
								<Text>总价： ￥{item.totle}</Text>
							</View>
						</View>
					)
				})
			}
			</ScrollView>
		);
	}
}

class OrderlistPage extends Component{
	constructor(props){
		super(props);
	}
	render(){

		//0 - 已完成 1 - 待付款 2 - 进行中 3 - 已取消
		let data = [
			{id: 1, company: '平安健康互联网股份有限公司', time: '2016-8-18 18:32', status: 0, img: 'http://up.test.pajk.cn/v1/tfs/T1RWhlB_AT1RCvBVdK_120x120.jpg', title: '40-5商城优惠券', number: 1, totle: '5.00'},
			{id: 2, company: '北京好药师大药房连锁有限公司', time: '2016-8-18 18:32', status: 1, img: 'http://up.test.pajk.cn/v1/tfs/T1xtKTBbZv1RXrhCrK.jpg_120x120.jpg', title: '善存R小佳维咀嚼片（香甜柠檬味） 40s', number: 2, totle: '68.02'},
			{id: 3, company: '好药师B商户', time: '2016-8-18 18:32', status: 2, img: 'http://up.test.pajk.cn/v1/tfs/T1EWZlBv_T1RCvBVdK_120x120.jpg', title: '【vip包邮】锌硒宝片0.25g*80s', number: 3, totle: '116.00'},
			{id: 4, company: '汤臣倍健', time: '2016-8-18 18:32', status: 3, img: 'http://up.test.pajk.cn/v1/tfs/T1DxJlB7Vv1RCvBVdK_120x120.jpg', title: '汤臣倍健测试商品2', number: 1, totle: '5.00'},
			{id: 5, company: '平安健康互联网股份有限公司', time: '2016-8-18 18:32', status: 4, img: 'http://up.test.pajk.cn/v1/tfs/T1RWhlB_AT1RCvBVdK_120x120.jpg', title: '40-5商城优惠券', number: 1, totle: '5.00'},
			{id: 6, company: '平安健康互联网股份有限公司', time: '2016-8-18 18:32', status: 0, img: 'http://up.test.pajk.cn/v1/tfs/T1RWhlB_AT1RCvBVdK_120x120.jpg', title: '40-5商城优惠券', number: 1, totle: '5.00'},
		];

		let scrollTabView = (
			<ScrollableTabView
			  style={{width: phone_width}}
			  tabBarUnderlineColor="#ff6f00"
			  tabBarBackgroundColor="white"
			  tabBarActiveTextColor="#ff6f00"
			  tabBarInactiveTextColor="#333"
			  tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 15}}
		      renderTabBar={() => <DefaultTabBar />}>
		      <OrderPage tabLabel='全部' data={data}/>
		      <OrderPage tabLabel='待付款' data={data.filter((item) => item.status === 1)}/>
		      <OrderPage tabLabel='进行中' data={data.filter((item) => item.status === 2)}/>
		      <OrderPage tabLabel='已完成' data={data.filter((item) => item.status === 0)}/>
		    </ScrollableTabView>
		);
		return (
			<View style={styles.container}>
			{scrollTabView}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	image: {
		width: 80,
		height: 80,
		resizeMode: 'stretch',
	},
	itemContent: {
		backgroundColor: '#fff',
		padding: 5,
		marginBottom: 10,
	},
	topContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleContent: {
		flex: 1,
	},
	bodyContent: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
		paddingTop: 10,
		paddingBottom: 10,
		borderTopColor: '#eee',
		borderTopWidth: 1,
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
	},
	title: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5
	}
})

export default OrderlistPage;