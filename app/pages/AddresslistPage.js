/**
*	我的地址
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

import AddressDetail from './AddressDetail';

const phone_width = Dimensions.get('window').width;

class AddresslistPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			defaultID: 1
		}
		this.addAddress = this.addAddress.bind(this);
	}
	
	setDefault(id){
		this.setState({defaultID: id});
	}

	editPress(user){
		console.log('----->>>editPress :',user);
		const {navigator} = this.props;

		Util.transform(navigator, 'addressDetail', AddressDetail, user);
	}

	deletePress(id){
		console.log('----->>>deletePress :',id);
	}

	addAddress(){
		const {navigator} = this.props;

		Util.transform(navigator, 'addressDetail', AddressDetail, null);
	}

	renderAddressList(){
		let data = [{id: 1, name: 'aaa', phone: '13162626262', address: '按时间大时代', isDefault: true},
		{id: 2, name: 'bbb', phone: '13162626262', address: '按时间大时代', isDefault: false},
		{id: 3, name: 'ccc', phone: '13162626262', address: '按时间大时代', isDefault: false},
		{id: 4, name: 'bbb', phone: '13162626262', address: '按时间大时代', isDefault: false},
		{id: 5, name: 'bbb', phone: '13162626262', address: '按时间大时代', isDefault: false},
		{id: 6, name: 'bbb', phone: '13162626262', address: '按时间大时代', isDefault: false},
		{id: 7, name: 'bbb', phone: '13162626262', address: '按时间大时代', isDefault: false},
		{id: 8, name: 'bbb', phone: '13162626262', address: '按时间大时代', isDefault: false},];

		return (
			<View>
			{
				data&&data.map((item, index) => {
					return (
						<View style={styles.addressItemContent} key={index}>
							<View style={styles.row}>
								<Text numberOfLines={1}>{item.name}</Text>
								<Text numberOfLines={1}>{item.phone}</Text>
							</View>
							<Text numberOfLines={1} style={styles.addressDetail}>{item.address}</Text>
							<View style={styles.editLine}>
								<Text style={styles.setDefault} onPress={this.setDefault.bind(this, item.id)}>
									<IconFontText icon={item.id === this.state.defaultID ? "check-circle" : "circle-thin"}/> 设为默认
								</Text>
								<Text onPress={this.editPress.bind(this, item)}><IconFontText icon="pencil"/> 编辑</Text>
								<Text style={{marginLeft: 10}} onPress={this.deletePress.bind(this, item.id)}><IconFontText icon="trash"/> 删除</Text>
							</View>
						</View>
					)
				})
			}
			</View>
		);

		// return (
		// 	<View style={styles.addressItemContent}>
		// 		<View style={styles.row}>
		// 			<Text numberOfLines={1}>{'aaa'}</Text>
		// 			<Text numberOfLines={1}>{'1316271'}</Text>
		// 		</View>
		// 		<Text numberOfLines={1} style={styles.addressDetail}>{'按时打算打打'}</Text>
		// 		<View style={styles.editLine}>
		// 			<Text style={styles.setDefault}><IconFontText icon="circle-thin"/> 设为默认</Text>
		// 			<Text><IconFontText icon="pencil"/> 编辑</Text>
		// 			<Text style={{marginLeft: 10}}><IconFontText icon="trash"/> 删除</Text>
		// 		</View>
		// 	</View>
		// );
	}
	render(){
		return (
			<ScrollView style={styles.container}>
			{
				this.renderAddressList()
			}
				<View style={styles.addButtonContent}>
					<TouchableOpacity style={styles.addButton} onPress={this.addAddress}>
						<Text style={styles.addText}>+ 添加地址</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
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
		justifyContent: 'space-between'
	},
	addressItemContent: {
		backgroundColor: '#fff',
		marginBottom: 10,
		padding: 10,
	},
	addressDetail: {
		marginTop: 10,
	},
	editLine: {
		flexDirection: 'row',
		marginTop: 10,
		paddingTop: 10,
		borderTopColor: '#f0f0f0',
		borderTopWidth: 1,
		alignItems: 'center',
	},
	setDefault: {
		flex: 1,
	},
	addButtonContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	addButton: {
		width: phone_width*0.8,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 30,
		borderWidth: 1,
		borderColor: '#bdbdbd',
		borderStyle: 'dashed',
	},
	addText: {
		color: '#ff6f00',
	}
})

export default AddresslistPage;