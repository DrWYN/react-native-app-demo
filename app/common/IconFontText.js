import React, {PropTypes, Component} from 'react';
import {
	StyleSheet,
	Text
} from 'react-native';

import iconfont from '../fonts';

import StyleSheetPropType from 'StyleSheetPropType';
import ViewStylePropTypes from 'ViewStylePropTypes';
import TextStylePropTypes from 'TextStylePropTypes';

let ViewStylePropType = StyleSheetPropType(ViewStylePropTypes);
let TextStylePropType = StyleSheetPropType(TextStylePropTypes);

const propTypes = {
	onPress: PropTypes.func,
	style: TextStylePropType,
	icon: PropTypes.string
}

class IconFontText extends Component{
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(){
		let {onPress} = this.props;
		onPress&&onPress();
	}
	render(){
		return (
			<Text style={[{fontFamily: 'fontawesome',fontSize: 16}, this.props.style]} onPress={this.onClick}>
				{iconfont[this.props.icon]}
			</Text>
		);
	}
}

IconFontText.propTypes = propTypes;

export default IconFontText;