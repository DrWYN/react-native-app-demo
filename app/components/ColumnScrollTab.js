//垂直滚动Tab
import React, {PropTypes, Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	ListView,
	TouchableOpacity,
	Dimensions,
} from 'react-native';

import Util from '../utils/Util';

import StyleSheetPropType from 'StyleSheetPropType';
import ViewStylePropTypes from 'ViewStylePropTypes';
import TextStylePropTypes from 'TextStylePropTypes';

let ViewStylePropType = StyleSheetPropType(ViewStylePropTypes);
let TextStylePropType = StyleSheetPropType(TextStylePropTypes);

const propTypes = {
	onTabPress: PropTypes.func,
	data: PropTypes.object,
	currentTag: PropTypes.string,
}

class ColumnScrollTab extends Component{
	constructor(props){
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}	

	rowPress(data, rowID){
		const {onTabPress} = this.props;

		onTabPress&&onTabPress(data.tag);
	}

	renderRow(data, sectionID, rowID){
		let nowStyle = ((data.tag === this.props.currentTag) ? [styles.rowContent, styles.rowContentHighLight] : [styles.rowContent]);
		return (
			<TouchableOpacity style={nowStyle} key={rowID} onPress={() => {this.rowPress(data, rowID)}}>
				<Text>{data.title}</Text>
			</TouchableOpacity>
		);
	}

	render(){

		let listData = this.ds.cloneWithRows(this.props.data);

		return (
			<ListView
		          automaticallyAdjustContentInsets={false}
		          enableEmptySections={true}
		          dataSource={listData}
		          style={styles.listContainer}
		          renderRow={(data, sectionID, rowID) => this.renderRow(data, sectionID, rowID)} />
		);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		backgroundColor: '#f0f0f0',
	},
	rowContent: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	},
	rowContentHighLight: {
		backgroundColor: '#fff',
		borderLeftWidth: 4,
		borderLeftColor: '#ff6f00',
	}
})

export default ColumnScrollTab;