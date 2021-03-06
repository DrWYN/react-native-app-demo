'use strict';

import React, {PropTypes, Component} from 'react';
import {
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import StyleSheetPropType from 'StyleSheetPropType';
import ViewStylePropTypes from 'ViewStylePropTypes';

let stylePropType = StyleSheetPropType(ViewStylePropTypes);

const propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	uri: PropTypes.string,
	require: PropTypes.number,
	isStatic: PropTypes.bool,
	isUri: PropTypes.bool,
	imageStyle: stylePropType,
	style: stylePropType
}

class ImageButton extends Component {
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
		var source = this.props.isUri ? {
			uri: this.props.uri,
			isStatic: this.props.isStatic
		} : this.props.require;
		return (
			<TouchableOpacity
				style={this.props.style}
				onPress={this.onPress}>
				<Image
				  style={this.props.imageStyle}
				  source={source}
				/>
			</TouchableOpacity>
		);
	}
}

ImageButton.propTypes = propTypes;

ImageButton.defaultProps = {
	onPress: function() {},
	disabled: false,
	isStatic: false,
	uri: '',
	isUri: true
}

export default ImageButton;