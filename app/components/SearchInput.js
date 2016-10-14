//SearchInput
import React, {PropTypes, Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native';

import SearchPage from '../pages/SearchPage';
import Util from '../utils/Util';

import IconFontText from '../common/IconFontText';

import StyleSheetPropType from 'StyleSheetPropType';
import ViewStylePropTypes from 'ViewStylePropTypes';
import TextStylePropTypes from 'TextStylePropTypes';

let ViewStylePropType = StyleSheetPropType(ViewStylePropTypes);
let TextStylePropType = StyleSheetPropType(TextStylePropTypes);

const propTypes = {
	onPress: PropTypes.func,
	style: ViewStylePropType,
	textStyle: TextStylePropTypes,
	iconStyle: ViewStylePropType,
	placehold: PropTypes.string
}

const phone_width = Dimensions.get('window').width;

class SearchInput extends Component{
	constructor(props){
		super(props);
		this.pressInput = this.pressInput.bind(this);
	}

	pressInput(){
		// console.log('----->>>>>input');
		const {onPress, navigator} = this.props;
		Util.transform(navigator, 'SearchPage', SearchPage, null);
		// if(navigator){
		// 	navigator.push({
		// 		name: 'SearchPage',
		// 		component: SearchPage,
		// 		params: {
		// 			data: 'aaaaaa'
		// 		}
		// 	});
		// }

		onPress&&onPress();
	}

	render(){
		return(
			<TouchableOpacity style={[styles.container, this.props.style]} onPress={this.pressInput} activeOpacity={1}>
				<View style={[styles.textInput, this.props.textStyle]}>
					<IconFontText icon="search" style={[styles.searchIcon, this.props.iconStyle]}/>
					<Text style={styles.text}>{this.props.placehold}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		width: phone_width,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e0e0e0',
	},
	textInput: {
		flexDirection: 'row',
		width: phone_width*0.95,
		height: 30,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
	},
	searchIcon: {
		fontWeight: '100',
	},
	text: {
		marginLeft: 5,
	}
});

export default SearchInput;