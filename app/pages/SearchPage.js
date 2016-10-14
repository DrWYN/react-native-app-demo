/**
*	搜索结果页
*/
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TextInput,
	ListView,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import IconFontText from '../common/IconFontText';
import Button from '../common/Button';

const phone_width = Dimensions.get('window').width;
const phone_height = Dimensions.get('window').height;

class SearchPage extends Component{
	constructor(props){
		super(props);
		let historyTextData = ['aaa', 'bbb', 'ccc'];
		let matchDate = [{title: 'title1'}, {title: 'title2'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, 
		{title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, 
		{title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}, {title: 'title3'}];
		this.state = {
			searchText: '',
			historyTextData: historyTextData,
			matchDate: matchDate,
		}
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.clearSearchInput = this.clearSearchInput.bind(this);
	}

	querySearchResult(text){
		console.log('------>>>>>querySearchResult: '+text);
		if(!text.length) return;
		let temp = [];
		temp = this.state.historyTextData.slice(0);
		temp.push(text);
		if(temp.length > 3) temp = temp.slice(temp.length - 3);
		this.setState({searchText: '', historyTextData: temp});
	}

	clearSearchInput(){
		this.setState({searchText: ''});
	}

	//热门搜索
	renderHotSearch(){
		let hotTitle = [{text: '字1'}, {text: '字2'}, {text: '字3'}, {text: '字4'}, {text: '字5'}, {text: '测试'}];

		console.log(this.state.historyText);
		
		let historyText = this.ds.cloneWithRows(this.state.historyTextData);

		return (
			<View style={styles.hotSearchContainer}>
				<View style={styles.hotTop}>
					<Text style={[styles.hotTopTitle, styles.fontBig]}>热门搜索</Text>
					<Text style={styles.fontSmall}>平安质保 正品低价 假一赔十</Text>
				</View>
				<View style={styles.hotBody}>
					{hotTitle&&hotTitle.map((item, index) => {
						return (
							<View key={index} style={styles.hotTextContent}>
								<View style={styles.hotTitleBorder}>
									<Text style={styles.hotTitleKey}>{item.text}</Text>
								</View>
							</View>
						)
					})}
				</View>
				<View style={styles.hotHistory}>
					<View style={styles.hotHistoryTop}>
						<Text>历史搜索</Text>
					</View>
					<View>
						<ListView
				          automaticallyAdjustContentInsets={false}
				          enableEmptySections={true}
				          dataSource={historyText}
				          renderRow={(data: Object, rowID: number) => {
				          	return (
				          		<View key={rowID} style={styles.hotHistoryTop}>
				          			<Text>{data}</Text>
				          		</View>
				          	)
				          }} />
					</View>
					{this.state.historyTextData&&this.state.historyTextData.length ? (
						<View style={styles.clearHistory}>
							<Button text="清空搜索记录" style={styles.clearHistoryButton} onPress={() => {this.setState({historyTextData: []})}}/>
						</View>) : null}
					
				</View>
			</View>
		);
	}

	//智能匹配搜索内容
	renderMatching(){

		let matchDate = this.ds.cloneWithRows(this.state.matchDate);

		return (
			<View style={styles.container}>
				<ListView
		          automaticallyAdjustContentInsets={false}
		          enableEmptySections={true}
		          dataSource={matchDate}
		          style={{flex: 1}}
		          renderRow={(data: Object, rowID: number) => {
		          	return (
		          		<View key={rowID} style={styles.hotHistoryTop}>
		          			<Text>{data.title}</Text>
		          		</View>
		          	)
		          }} />
			</View>
		);
	}


	renderSearchBody(){
		//没有输入前 - 热门搜索
		if(!this.state.searchText.length) return this.renderHotSearch();
		//有输入，没有确定前 - 智能匹配搜索内容
		return this.renderMatching();
		//确定搜索内容后 - 搜索结果页
	}

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.inputBg}>
					<View style={styles.inputContainer}>
						<IconFontText icon="search"/>
						<TextInput
							placeholder="搜索"
							autoFocus={true}
	                        onChangeText={(text) => this.setState({searchText:text})}
	                        onSubmitEditing={(event)=>this.querySearchResult(event.nativeEvent.text)}
	                        value={this.state.searchText}
	                        style={styles.searchInput}/>
	                    {this.state.searchText ? <IconFontText icon="times-circle" onPress={this.clearSearchInput}/> : null}
					</View>
				</View>	
				{this.renderSearchBody()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fontBig: {
		fontSize: 16
	},
	fontSmall: {
		fontSize: 12,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	inputBg: {
		backgroundColor: '#f0f0f0',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		margin: 10,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
	},
	searchInput: {
		flex: 1,
		backgroundColor: '#fff',
		fontSize: 12,
		height: 30,
	},
	hotSearchContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
	hotTop: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		padding: 5,
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
	},
	hotTopTitle: {
		flex: 1,
	},
	hotBody: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingTop: 5,
		paddingBottom: 5,

	},
	hotTextContent: {
		width: phone_width*0.25,
		height: 40,
		padding: 3,
	},
	hotTitleBorder: {
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#eee',
	},
	hotTitleKey: {
		textAlign: 'center',
		padding: 3,
	},
	hotHistory: {
		flex: 1,
		borderTopColor: '#eee',
		borderTopWidth: 1,
	},
	hotHistoryTop: {
		padding: 10,
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
	},
	clearHistory: {
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	clearHistoryButton: {
		borderColor: '#eee',
		borderWidth: 1,
		borderRadius: 4,
		padding: 3,
	}
})

export default SearchPage;