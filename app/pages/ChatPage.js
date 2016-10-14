/**
*	在线咨询
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

class ChatPage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Text>在线咨询</Text>
		);
	}
}

export default ChatPage;