//1+4的楼层：左1个1/2模块 右4个1/8模块
//lc_1_4
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
import EighthPart from './FloorEighthPart';

const phone_width = Dimensions.get('window').width;

class FloorStyle2 extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let {modules} = this.props;

		let leftData = modules[0] || {};
		let rightFirstData = modules[1] || {};
		let rightSecondData = modules[2] || {};
		let rightThirdData = modules[3] || {};
		let rightFourthData = modules[4] || {};
		return (
			<View style={styles.container}>
				<HalfPart data={leftData}/>
				<View style={styles.rightPart}>
					<View style={styles.rightTop}>
						<EighthPart data={rightFirstData}/>
						<EighthPart data={rightSecondData} style={styles.marginLeft}/>
					</View>
					<View style={styles.rightBottom}>
						<EighthPart data={rightThirdData}/>
						<EighthPart data={rightFourthData} style={styles.marginLeft}/>
					</View>
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
	rightTop: {
		flexDirection: 'row',
		marginBottom: 1,
	},
	rightBottom: {
		flexDirection: 'row',
	},
	marginLeft: {
		marginLeft: 1,
	}
})

export default FloorStyle2;