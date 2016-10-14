'use strict';

import React, {PropTypes, Component} from 'react';
import  {
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import StyleSheetPropType from 'StyleSheetPropType';
import ViewStylePropTypes from 'ViewStylePropTypes';
import TextStylePropTypes from 'TextStylePropTypes';

let ViewStylePropType = StyleSheetPropType(ViewStylePropTypes);
let TextStylePropType = StyleSheetPropType(TextStylePropTypes);

const propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	style: ViewStylePropType,
	textStyle: TextStylePropType,
	text: PropTypes.string
}

class Button extends Component {
	constructor(props) {
		super(props);

		this.onPress = this.onPress.bind(this);
	}

	onPress() {
		if (this.props.disabled) {
			return;
		}
		this.props.onPress();
	}

	render() {
		return (
			<TouchableOpacity
				style={this.props.style}
				onPress={this.onPress}>
				<Text numberOfLines={1} style={this.props.textStyle}>
					{this.props.text}
				</Text>
			</TouchableOpacity>
		);
	}
}

Button.propTypes = propTypes;

Button.defaultProps = {
	onPress: function() {},
	disabled: false
}

export default Button;