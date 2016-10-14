import React, {PropTypes, Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Dimensions
} from 'react-native';

import ActivityPage from '../../pages/ActivityPage';
import Util from '../../utils/Util';

class FloorFourthPart extends Component{
	constructor(props){
		super(props);
	}

	onItemPress(){
		Util.transform(this.context.navigator, 'floor', ActivityPage, null);
	}

	render(){

		let {data, style} = this.props;
		let color = data.color || '#212121';
		let tag = data.tag || '';

		return (
			<TouchableOpacity activeOpacity={1} style={[styles.halfContainer, style]} onPress={this.onItemPress.bind(this)}>
				<Text style={[styles.title,{color: color}]}>{data.title}</Text>
				<Text style={styles.subTitle}>{data.subTitle}</Text>
				<View style={styles.imgContainer}>
					<Image source={{uri: data.img}} style={styles.img}/>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	halfContainer: {
		flex: 1,
		height: 100,
		padding: 5,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	subTitle: {
		fontSize: 11,
		color: '#999'
	},
	imgContainer: {
		flex: 1,
	},
	img: {
		flex: 1,
	    resizeMode: 'contain',
	}
})

FloorFourthPart.contextTypes = {
  navigator: PropTypes.object
};

export default FloorFourthPart;