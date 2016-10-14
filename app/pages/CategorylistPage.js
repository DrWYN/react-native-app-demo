/**
*	分类找药
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

import SearchPage from './SearchPage';

import SearchInput from '../components/SearchInput';
import ColumnScrollTab from '../components/ColumnScrollTab';

class CategorylistPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentTag: '6001'
		}
	}
	tabPress(tag){
		this.setState({currentTag: tag});
	}

	catButtonPress(cat){
		console.log(cat);
		const {navigator} = this.props;

		Util.transform(navigator, 'SearchPage', SearchPage, null);
	}

	renderBody(){
		let allData_6001 = [{title: '常备用药', data: ['aaa', 'bbb']}, 
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},];
		let allData_6002 = [{title: '专科用药', data: ['aaa', 'bbb']}, 
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},];
		let allData_6003 = [{title: '营养保健', data: ['aaa', 'bbb']}, 
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},];
		let allData_6004 = [{title: '药妆个护', data: ['aaa', 'bbb']}, 
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},
					{title: '胃肠/肝胆', data: ['便秘', '消化不良', '痔疮', '肝炎', '胃炎', '胃肠溃疡', '胆囊炎']},];

		let tempData = [{title:'常备用药', tag: '6001', allData: allData_6001}, 
						{title:'专科用药', tag:'6002', allData: allData_6002}, 
						{title:'营养保健', tag: '6003', allData: allData_6003}, 
						{title: '药妆个护', tag: '6004', allData: allData_6004}, 
						{title: '医疗器械', tag: '6005', allData: allData_6001}, 
						{title: '成人计生', tag: '6006', allData: allData_6002}, 
						{title: '母婴居家', tag: '6007', allData: allData_6003}, 
						{title: '隐形眼镜', tag: '6008', allData: allData_6004}, 
						{title: '卡券体验', tag: '6009', allData: allData_6001}, 
						{title: '食品百货', tag: '6010', allData: allData_6001}];

		let allData = [];
		tempData.some((item, index) => {
			if(item.tag === this.state.currentTag){
				allData = item.allData;
				return true;
			}
			return false;
		})

		return (
			<View>
			{
				allData&&allData.map((item, index) => {
					return (
						<View key={index} style={styles.bodyItemContent}>
							<Text style={styles.catTitle}>{item.title}</Text>
							<View style={styles.catContent}>
							{
								item.data&&item.data.map((cat, index) => {
									return (
										<Button style={styles.catButton} key={index} text={cat} onPress={() => {this.catButtonPress(cat)}}/>
									)
								})
							}
							</View>
						</View>
					)
				})
			}
			</View>
		);
	}

	render(){
		let data = [{title:'常备用药', tag: '6001'}, {title:'专科用药', tag:'6002'}, {title:'营养保健', tag: '6003'}, {title: '药妆个护', tag: '6004'}, 
		{title: '医疗器械', tag: '6005'}, {title: '成人计生', tag: '6006'}, {title: '母婴居家', tag: '6007'}, {title: '隐形眼镜', tag: '6008'}, 
		{title: '卡券体验', tag: '6009'}, {title: '食品百货', tag: '6010'}];
		return (
			<View style={styles.container}>
				<SearchInput placehold="aaaa" navigator={this.props.navigator}/>
				<View style={styles.categoryBody}>
					<View style={styles.leftBody}>
						<ColumnScrollTab data={data} currentTag={this.state.currentTag} onTabPress={(tag) => this.tabPress(tag)}/>
					</View>
					<ScrollView style={styles.rightBody}>
						{this.renderBody()}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	categoryBody: {
		flexDirection: 'row',
		flex: 1,
	},
	leftBody: {
		width: 100,
	},
	rightBody: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff'
	},
	bodyItemContent: {

	},
	catTitle: {
		margin: 3,
	},
	catContent: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
	},
	catButton: {
		width: 65,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 3,
		borderWidth: 1,
		borderColor: '#f0f0f0',
	},
})

export default CategorylistPage;