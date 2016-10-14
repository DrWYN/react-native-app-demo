/**
*	商城首页
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

import TopBar from '../components/TopBar';
import SearchInput from '../components/SearchInput';
import Banner from '../components/Banner';

import Swiper from '../common/Swiper';

import Chop from '../views/Chop';
import ChooseFloor from '../views/ChooseFloor';

import Categorylist from './CategorylistPage';
import Chat from './ChatPage';
import Orderlist from './OrderlistPage';
import Activity from './ActivityPage';
import Addresslist from './AddresslistPage';

import Util from '../utils/Util';



const phone_width = Dimensions.get('window').width;

export default class MallPage extends Component{

	constructor(props){
		super(props);
	}

	//banner
	renderBanner(){
		let banners = [{img: 'http://up.test.pajk.cn/v1/tfs/T1BsDlB7JT1RCvBVdK_640x300.jpg'}, {img: 'http://up.test.pajk.cn/v1/tfs/T1usDlBvZT1RCvBVdK_640x300.jpg'}]
		return (
			<Banner height={150} banners={banners} onPress={this.bannerPress.bind(this)}/>
		);
	}
	bannerPress(){
		Util.transform(this.props.navigator, 'ActivityPage', Activity, {data: 'aaaa'});
	}

	//导航求
	renderCateBox(){
		let data = [
			{title: '分类找药', img: 'http://up.test.pajk.cn/v1/tfs/T1BYxlB_xT1RCvBVdK_80x80.jpg', tag: 'categorylist'},
			{title: '在线咨询', img: 'http://up.test.pajk.cn/v1/tfs/T1rWxlBvWT1RCvBVdK_80x80.jpg', tag: 'chat'},
			{title: '我的订单', img: 'http://up.test.pajk.cn/v1/tfs/T1GWxlBXEv1RCvBVdK_80x80.jpg', tag: 'orderlist'},
			{title: '健康卡', img: 'http://up.test.pajk.cn/v1/tfs/T13YxlB5dT1RCvBVdK_80x80.jpg', tag: 'activity/1061'},
			{title: '男神管', img: 'http://up.test.pajk.cn/v1/tfs/T13bxlB5LT1RCvBVdK_80x80.jpg', tag: 'activity/1000'},
			{title: '女神管', img: 'http://up.test.pajk.cn/v1/tfs/T13WxlB5DT1RCvBVdK_80x80.jpg', tag: 'activity/999'},
			{title: '我的地址', img: 'http://up.test.pajk.cn/v1/tfs/T11YxlB5DT1RCvBVdK_80x80.jpg', tag: 'addresslist'},
			{title: '药速达', img: 'http://up.test.pajk.cn/v1/tfs/T1YxxlByAv1RCvBVdK_80x80.jpg', tag: ''},
		];

		return(
			<View style={styles.cateBoxContainer}>
			{
				data&&data.map((item, index) => {
					return (
						<TouchableOpacity style={styles.cateBoxItem} key={index} onPress={() => this.cateBoxItemPress(item)}>
							<Image source={{uri: item.img}} style={styles.cateBoxImage}/>
							<Text>{item.title}</Text>
						</TouchableOpacity>
					);
				})
			}
			</View>
		);
	}

	getComponent(tag){
		let component = null;
		switch(tag){
			case 'categorylist':
				component = Categorylist;
			break;
			case 'chat':
				component = Chat;
			break;
			case 'orderlist':
				component = Orderlist;
			break;
			case 'activity':
				component = Activity;
			break;
			case 'addresslist':
				component = Addresslist;
			break;
			default:
				component = null;
			break;
		} 
		return component;
	}

	cateBoxItemPress(item){
		let name = item.title;
		let tag = item.tag;
		let params = tag.split('/');
		let component = this.getComponent(params[0]);

		if(!component) return ;

		const {navigator} = this.props;

		Util.transform(navigator, name, component, params);

		// if(navigator){
		// 	navigator.push({
		// 		name: name,
		// 		component: component,
		// 		params: {
		// 			data: params
		// 		}
		// 	});
		// }
	}

	//今日头条
	renderTopLine(){

		let data = {
			name: "文字链活动",
			updateFrequency: 60,
			id: 397,
			sections: [
				{
					id: 8991,
					title: '1元抢爆款 美丽狂欢购',
					url: 'https://www.baidu.com'
				},
				{
					id: 8992,
					title: 'test22222222',
					url: 'https://www.baidu.com'
				},
			]
		};

		let {sections} = data; 

		return (
			<Swiper horizontal={false} height={45} autoplay={true} showsPagination={false}>
			{
				sections&&sections.map((item, index) => {
					// let src = require(url);
					return (
						<TouchableOpacity key={index} style={styles.topLineView} onPress={this.topLinePress.bind(this)}>
							<Text>{item.title}</Text>
						</TouchableOpacity>
					)
					
				})
			}
			
			</Swiper>
		);
	}

	topLinePress(){
		const {navigator} = this.props;

		Util.transform(navigator, 'topLine', Activity, null);
	}

	//剁手价
	renderScekilling(){

		let data = {
			startTime: 1468857600000,
			endTime: 0,
			cycle: 1800,
			name: '商城首页B2C剁手价',
			products: [
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
			]
		}

		return <Chop data={data} navigator={this.props.navigator}/>;
	}

	renderYunYing(){
		let model = {
			name: '减肥瘦身_1-4',
			id: 405,
			subType: 'lc_1_4',
			sections: [
				{
					name: '',
					id: 7345,
					content: {
						ind: 'title_pit',
						title: '减肥瘦身（好药师)',
						url: '',
					}
				},
				{
					name: '',
					id: 7346,
					content: {
						ind: '1A',
						title: '今夏减肥爆款',
						subTitle: '款款日销万件-手慢无!',
						img: 'http://up.test.pajk.cn/v1/tfs/T1IxxlB5KT1RCvBVdK_200x200.jpg',
						url: '',
					}
				},
				{
					name: '',
					id: 7347,
					content: {
						ind: '2A',
						title: '奥利司他',
						subTitle: '48h排油',
						img: 'http://up.test.pajk.cn/v1/tfs/T11bxlBmxT1RCvBVdK_200x200.jpg',
						url: '',
					}
				},
				{
					name: '',
					id: 7348,
					content: {
						ind: '3A',
						title: '左旋肉碱',
						subTitle: '30元特卖',
						img: 'http://up.test.pajk.cn/v1/tfs/T11WxlB5xT1RCvBVdK_200x200.jpg',
						url: '',
					}
				},
				{
					name: '',
					id: 7349,
					content: {
						ind: '4A',
						title: '纤维代餐',
						subTitle: '每日4元',
						img: 'http://up.test.pajk.cn/v1/tfs/T1IxxlB5_T1RCvBVdK_200x200.jpg',
						url: '',
					}
				},
				{
					name: '',
					id: 7350,
					content: {
						ind: '5A',
						title: '纤体瘦腿',
						subTitle: '穿上显瘦',
						img: 'http://up.test.pajk.cn/v1/tfs/T1IYxlB5KT1RCvBVdK_200x200.jpg',
						url: '',
					}
				}
			]
		};

		let floorContents = [];
        let titleInfo = [];
        let moduleId = model.id;
        model.sections.map(function(part,key){
            let content = part.content;
            content.id = part.id;
            if(content.ind == 'title_pit'){
                titleInfo.push(content);
            }else{
                floorContents.push(content);
            }
        });
        let floorType = model.subType;

        //楼层类型和服务端返回坑位数量不符时，该楼层不展示
        let display;
        let contentLength = 0;
        //截取floorType中的字符串数字,相加
        //floorType = "lc_1_1_2", contentLength = 1 + 1 + 2
        floorType.replace(/\d/g, function(val, index) {
          contentLength += +val;
        });
        display = floorContents.length < contentLength ? false : true;

        return(
            <ChooseFloor contents={floorContents} type={floorType} title={titleInfo[0]} display={display} id={moduleId} navigator={this.props.navigator}/>
      )
	}


	render(){
		return (
			<View style={styles.container}>
				<TopBar title="商城"/>
				<SearchInput style={{backgroundColor: '#ff4500'}} placehold="aaaa" navigator={this.props.navigator}/>
				<ScrollView>
					{this.renderBanner()}
					{this.renderCateBox()}
					{this.renderTopLine()}
					{this.renderScekilling()}
					{this.renderYunYing()}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		width: phone_width,
		backgroundColor: '#e0e0e0'
	},
	cateBoxContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#fff',
		marginTop: 10
	},
	cateBoxItem: {
		width: phone_width*0.25,
		height: 100,
		padding: 5,
		alignItems:'center',
      	justifyContent:'center',
	},
	cateBoxImage: {
		width: 40,
        height: 40,
        resizeMode: 'stretch',
	},
	topLineView: {
		flex: 1,
	    justifyContent: 'center',
	    paddingLeft: 10,
	    marginTop: 1,
	    backgroundColor: '#fff'
	}
});