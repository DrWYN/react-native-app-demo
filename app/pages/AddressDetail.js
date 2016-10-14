/**
*	地址填写页
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

const phone_width = Dimensions.get('window').width;

class AddressDetail extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			phone: '',
			region: '',
			address: '',
		}
	}
	render(){
		return (
			<View style={styles.container}>
				<View style={styles.itemContent}>
					<Text>收货人</Text>
					<TextInput
	                    placeholder="请输入收货人姓名"
	                    placeholderTextColor="#f0f0f0"
	                    onChangeText={(text) => {this.setState({name: text})}}
	                    value={this.state.name}
	                    style={styles.textInput}/>
				</View>
				<View style={styles.itemContent}>
					<Text>手机号码</Text>
					<TextInput
	                    placeholder="请输入手机号"
	                    placeholderTextColor="#f0f0f0"
	                    keyboardType="phone-pad"
	                    onChangeText={(text) => {this.setState({phone: text})}}
	                    value={this.state.phone}
	                    style={styles.textInput}/>
				</View>
				<View style={styles.itemContent}>
					<Text>所在地区</Text>
					<TextInput
	                    placeholder="省/市/区"
	                    placeholderTextColor="#f0f0f0"
	                    onChangeText={(text) => {this.setState({region: text})}}
	                    value={this.state.region}
	                    style={styles.textInput}/>
				</View>
				<View style={styles.itemContent}>
					<Text>收货地址</Text>
					<TextInput
	                    placeholder="请输入详细收获地址"
	                    placeholderTextColor="#f0f0f0"
	                    onChangeText={(text) => {this.setState({address: text})}}
	                    value={this.state.address}
	                    style={styles.textInput}/>
				</View>
				<View style={styles.saveButtonContent}>
					<Button text="保存" style={styles.button} textStyle={{color: '#fff'}}/>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
	},
	textInput: {
		flex: 1,
		backgroundColor: '#fff',
	},
	itemContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 5,
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
	},
	saveButtonContent: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#ff6f00',
		width: phone_width*0.9,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	}
})

export default AddressDetail;