import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

const phone_width = Dimensions.get('window').width;

export default class HealthCirclePage extends Component{

	render(){
		let scrollTabView = (
			<ScrollableTabView
			  style={{width: phone_width}}
			  tabBarUnderlineColor="red"
			  tabBarBackgroundColor="white"
			  tabBarActiveTextColor="red"
			  tabBarInactiveTextColor="#333"
			  tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 15}}
		      renderTabBar={() => <DefaultTabBar />}>
		      <Text tabLabel='Tab #1'>My</Text>
		      <Text tabLabel='Tab #2'>favorite</Text>
		      <Text tabLabel='Tab #3'>project</Text>
		    </ScrollableTabView>
		);
		return (
			<View style={styles.container}>
				<Text>HealthCirclePage</Text>
				{scrollTabView}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center'
	}
});