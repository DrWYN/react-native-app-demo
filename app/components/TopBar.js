//topBar
import React, {PropTypes, Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import Button from '../common/Button';
import IconFontText from '../common/IconFontText';

import StyleSheetPropType from 'StyleSheetPropType';
import ViewStylePropTypes from 'ViewStylePropTypes';
import TextStylePropTypes from 'TextStylePropTypes';

let ViewStylePropType = StyleSheetPropType(ViewStylePropTypes);
let TextStylePropType = StyleSheetPropType(TextStylePropTypes);

const propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	style: ViewStylePropType,
	title: PropTypes.string
}

const phone_width = Dimensions.get('window').width;

class TopBar extends Component{
	constructor(props){
		super(props);

		this.backIconClick = this.backIconClick.bind(this);
	}
	backIconClick(){
		const { navigator } = this.props;

		if(navigator && navigator.getCurrentRoutes().length > 1){
            navigator.pop();
            return true;
          }

	}
	render(){
		
		const { navigator } = this.props;

		return (
			<View style={styles.container}>
				{(navigator && (navigator.getCurrentRoutes().length > 1)) ? <IconFontText icon="angle-left" style={styles.backIcon} onPress={this.backIconClick}/> : null }
				<View style={styles.title}>
					<Text>
						{this.props.title}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: phone_width,
		height: 50,
		backgroundColor: '#f0f0f0',
		padding: 5,
	},
	backIcon: {
		width: 20,
		height: 20,
		fontSize: 24,
		marginLeft: 5,
	},
	title: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

TopBar.propTypes = propTypes;

TopBar.defaultProps = {

}

export default TopBar;


