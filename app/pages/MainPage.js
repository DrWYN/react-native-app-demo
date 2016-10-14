import React, { Component } from 'react';
import {
	AppRegistry,
	PropTypes,
	StyleSheet,
	Text,
	Image,
	View,
	Navigator,
	TextInput,
	ListView,
	Dimensions,
	BackAndroid,
	Platform
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import TabNavigator from 'react-native-tab-navigator';

import HomePage from './HomePage';	//首页
import InquiryPage from './InquiryPage';	//问诊
import MessagePage from './MessagePage'; //消息
import MallPage from './MallPage'; 	//商城
import HealthCirclePage from './HealthCirclePage';	//健康圈

const HOME_TAB = 'homeTab';
const INQUIRY_TAB = 'inquiryTab';
const MESSAGE_TAB = 'messageTab';
const MALL_TAB = 'mallTab';
const HEALTH_CIRCLE_TAB = 'healthCircleTab';

const phone_width = Dimensions.get('window').width;


export class MainPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			selectedTab: HOME_TAB,
			showTabBar: true
		}
		this.toggleTabBar = this.toggleTabBar.bind(this);
	}
	
	componentDidMount(){
		let {navigator} = this.props;

		if(Platform.OS === 'android'){

			BackAndroid.addEventListener('hardwareBackPress', () => {
				// if(navigator && navigator.getCurrentRoutes().length > 1){
				// 	navigator.pop();
				// 	return true;
				// }
				// return false;
				if(navigator){
					let routes = navigator.getCurrentRoutes();
					let lastRoute = routes[routes.length - 1]; // 当前页面对应的route对象

					if (lastRoute.onHardwareBackPress) {// 先执行route注册的事件
	                    let flag = lastRoute.onHardwareBackPress();
	                    if (flag === false) {// 返回值为false就终止后续操作
	                        return true;
	                    }
	                }

	                if (routes.length === 1) {// 在第一页了
	                    // 此处可以根据情况实现 点2次就退出应用，或者弹出rn视图等   
	                    return false;    
	                } else {    
	                    navigator.pop();  
	                }
				}
				return true;
			});
		}
	}

	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress');
	}

	renderContent(pageName){
		let renderView;
		switch(pageName){
			case HOME_TAB:
				renderView = <HomePage navigator={this.props.navigator}/>;
			break;
			case INQUIRY_TAB:
				renderView = <InquiryPage navigator={this.props.navigator}/>;
			break;
			case MESSAGE_TAB:
				renderView = <MessagePage navigator={this.props.navigator}/>;
			break;
			case MALL_TAB:
				renderView = <MallPage navigator={this.props.navigator}/>;
			break;
			case HEALTH_CIRCLE_TAB:
				renderView = <HealthCirclePage navigator={this.props.navigator}/>;
			break;	
			default:
				renderView = null;
			break;
		}
		return (
			<View style={styles.pageView}>
				{renderView}
			</View>
		);
	}

	//显示和隐藏Tab	
	toggleTabBar(){	
		this.setState({showTabBar: !this.state.showTabBar});
	}

	render(){
		let tabBarStyle = {};
		let sceneStyle = {};
		if(!this.state.showTabBar){
			tabBarStyle.height = 1;
			tabBarStyle.overflow = 'hidden';
			sceneStyle.paddingBottom = 0;
		}

		return (
			<View style={styles.container}>
				<TabNavigator tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
					<TabNavigator.Item
						selected={this.state.selectedTab === HOME_TAB}
						title="首页"
						renderIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_home_icon_nor.png')}/>}
						renderSelectedIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_home_icon_press.png')}/>}
						onPress={() => this.setState({selectedTab: HOME_TAB})}>
						{this.renderContent(HOME_TAB)}
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === INQUIRY_TAB}
						title="问诊"
						renderIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_inquiry_icon_nor.png')}/>}
						renderSelectedIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_inquiry_icon_press.png')}/>}
						onPress={() => this.setState({selectedTab: INQUIRY_TAB})}>
						{this.renderContent(INQUIRY_TAB)}
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === MESSAGE_TAB}
						title="消息"
						badgeText="5"
						renderIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_message_icon_nor.png')}/>}
						renderSelectedIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_message_icon_press.png')}/>}
						onPress={() => this.setState({selectedTab: MESSAGE_TAB})}>
						{this.renderContent(MESSAGE_TAB)}
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === MALL_TAB}
						title="健康商城"
						renderIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_mall_icon_nor.png')}/>}
						renderSelectedIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_mall_icon_press.png')}/>}
						onPress={() => this.setState({selectedTab: MALL_TAB})}>
						{this.renderContent(MALL_TAB)}
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === HEALTH_CIRCLE_TAB}
						title="健康圈"
						renderIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_bbs_icon_nor.png')}/>}
						renderSelectedIcon={() => <Image style={styles.tabImage} source={require('../../images/tab_bbs_icon_press.png')}/>}
						onPress={() => this.setState({selectedTab: HEALTH_CIRCLE_TAB})}>
						{this.renderContent(HEALTH_CIRCLE_TAB)}
					</TabNavigator.Item>
				</TabNavigator>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	pageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabImage: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);