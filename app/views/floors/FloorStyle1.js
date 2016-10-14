//1+2的楼层：左1个1/2模块 右2个1/4模块
//lc_1_2
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

import HalfPart from './FloorHalfPart';
import FourthPart from './FloorFourthPart';

const phone_width = Dimensions.get('window').width;

class FloorStyle2 extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let {modules} = this.props;

		let leftData = modules[0] || {};
		let rightTopData = modules[1] || {};
		let rightBottomData = modules[2] || {};
		return (
			<View style={styles.container}>
				<HalfPart data={leftData}/>
				<View style={styles.rightPart}>
					<FourthPart data={rightTopData}/>
					<FourthPart data={rightBottomData} style={styles.marginTop}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: phone_width,
	},
	rightPart: {
		flexDirection: 'column',
		flex: 1,
		marginLeft: 1,
	},
	marginTop: {
		marginTop: 1,
	}
})

export default FloorStyle2;