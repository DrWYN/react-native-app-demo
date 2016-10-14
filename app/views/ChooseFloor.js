//楼层选择器
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

import IconFontText from '../common/IconFontText';

import FloorStyle2 from './floors/FloorStyle2';

const phone_width = Dimensions.get('window').width;

class ChooseFloor extends Component{
	constructor(props){
		super(props);
	}
	getChildContext() {
    return {navigator: this.props.navigator};
  }
	shouldComponentUpdate(nextProps, nextState, nextContext) {
	    let objToStr = JSON.stringify;

	    if (objToStr(this.props.contents) != objToStr(nextProps.contents)) {
	      return true;
	    }
	    return false;
	 }

	 floorTopTitlePress(){
	 	console.log('----->>>>>floorTopTitlePress');
	 }

	 renderContents() {
		const {type,id,contents} = this.props;
		switch(type) {
			// case "lc_1_2":
			// 	return(<FloorStyle1 modules={contents} id={id} />);
			case "lc_1_4":
				return(<FloorStyle2 modules={contents} id={id} />);
			// case "lc_1_1_2":
			// 	return(<FloorStyle3 modules={contents} id={id} />);
			// case "lc_2_4":
			// 	return(<FloorStyle4 modules={contents} id={id} />);
			// case "lc_4":
			// 	return(<FloorStyle5 modules={contents} id={id} />);
			// case "lc_8":
			// 	return(<FloorStyle6 modules={contents} id={id} />);
			// case "lc_1_1":
			// 	return(<FloorStyle7 modules={contents} id={id} />);
			// case "lc_1":
			// 	return(<FloorStyle8 modules={contents} id={id} />);
			default:
				return null;
		}
	};
	render(){
		let titleInfo = this.props.title || {};

		if(!this.props.display) return null;
		return (
			<View style={styles.floorContainer}>
				<TouchableOpacity style={styles.topTitle} activeOpacity={1} onPress={this.floorTopTitlePress.bind(this)}>
					<Text style={styles.title}>{titleInfo.title}</Text>
					<Text>更多</Text>
					<IconFontText icon="angle-right"/>
				</TouchableOpacity>
				{this.renderContents()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	floorContainer: {
		width: phone_width,
		marginTop: 8,
	},
	topTitle: {
		flexDirection: 'row',
		padding: 10,
		alignItems:'center',
		borderBottomColor: '#f0f0f0',
		borderBottomWidth: 1,
		backgroundColor: '#fff',
	},
	title: {
		flex: 1,
	},
})

//FloorEighthPart/FloorFourthPart/FloorHalfPart
ChooseFloor.childContextTypes = {
  navigator: PropTypes.object
};

export default ChooseFloor;