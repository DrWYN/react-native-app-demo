import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import bindActions from '../actions/bind';

import IconFontText from '../common/IconFontText';

class HomePage extends Component{
	testClick(){
		// bindActions.testAction('aaaa');
		bindActions.apiAction();
	}
	render(){
		return (
			<View style={styles.container}>
				<Text>HomePage</Text>
				<IconFontText icon="angle-down" onPress={this.testClick.bind(this)}/>
				<IconFontText icon="cloud" style={{color: 'red',fontSize: 24}} onPress={this.testClick.bind(this)}/>
				<Text>
					{this.props.test.text}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

function mapStateToProps(state){
	return {
		test: state.test
	}
}

export default connect(mapStateToProps)(HomePage);