// import React, {Component} from 'react';
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	Dimensions
// } from 'react-native';

// export default class MessagePage extends Component{
// 	render(){
// 		return (
// 			<View style={styles.container}>
// 				<Text>MessagePage</Text>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container:{
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// });


import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	KeyboardAvoidingView
} from 'react-native';

import TopBar from '../components/TopBar';

const phone_width = Dimensions.get('window').width;
const phone_height = Dimensions.get('window').height;

export default class MessagePage extends Component{
	constructor(props){
		super(props);
		this.state = {
	        name: '',
	        destination: '',
	        people_num: '',
	        day_num: '',
	        phone: '',
	        check_code: '',
	        mark: '',
	    }
	}
	render(){
		return (
			<View style={styles.container}>
				<TopBar title="test" navigator={this.props.navigator}/>
				<ScrollView
	            	keyboardShouldPersistTaps={true}
	            	contentContainerStyle={styles.contentContainerStyle}
	            	style={styles.scrollView}>
	             	<View>
	                  <View style={styles.input_container}>
	                    <View style={styles.input_row_container}>
	                      <TextInput
	                        placeholder="姓名"
	                        onChangeText={(text) => this.setState({name:text})}
	                        value={this.state.name}
	                        style={styles.text_input}/>
	                      <TextInput
	                        autoCapitalize="none"
	                        placeholder="欧洲目的地"
	                        multiline={false}
	                        autoCorrect={true}
	                        onChangeText={(text) => this.setState({destination:text})}
	                        value={this.state.destination}
	                        style={styles.text_input}/>
	                    </View>
	                    <View style={styles.input_row_container}>
	                      <TextInput
	                        placeholder="出行人数"
	                        keyboardType='number-pad'
	                        onChangeText={(text) => this.setState({people_num:text})}
	                        value={this.state.people_num}
	                        style={styles.text_input}/>
	                      <TextInput
	                        autoCapitalize="none"
	                        placeholder="出行天数"
	                        keyboardType='number-pad'
	                        multiline={false}
	                        autoCorrect={true}
	                        onChangeText={(text) => this.setState({day_num:text})}
	                        value={this.state.day_num}
	                        style={styles.text_input}/>
	                    </View>
	                    <View style={styles.input_row_container}>
	                      <TextInput
	                        placeholder="电话号码 "
	                        keyboardType='phone-pad'
	                        onChangeText={(text) => this.setState({phone:text})}
	                        value={this.state.phone}
	                        style={styles.text_input}/>
	                    </View>
	                    <View style={styles.input_row_container}>
	                      <TextInput
	                        placeholder="验证码"
	                        keyboardType='default'
	                        onChangeText={(text) => this.setState({check_code:text})}
	                        value={this.state.check_code}
	                        style={styles.text_input}/>
	                      <TouchableOpacity style={styles.check_code_button}>
	                        <Text>获取验证码</Text>
	                      </TouchableOpacity>
	                    </View>
	                    <View style={styles.input_row_container}>
	                      <TextInput
	                        placeholder="备注"
	                        multiline={true}
	                        keyboardType='default'
	                        onChangeText={(text) => this.setState({mark:text})}
	                        value={this.state.mark}
	                        style={styles.text_input}/>
	                    </View>
	                    <View style={styles.input_row_container}>
	                      <TextInput
	                        placeholder="备注"
	                        multiline={true}
	                        keyboardType='default'
	                        onChangeText={(text) => this.setState({mark:text})}
	                        value={this.state.mark}
	                        style={styles.text_input}/>
	                    </View>
	                    <View style={styles.input_row_container}>
	                      <TextInput
	                        placeholder="备注"
	                        multiline={true}
	                        keyboardType='default'
	                        onChangeText={(text) => this.setState({mark:text})}
	                        value={this.state.mark}
	                        style={styles.text_input}/>
	                    </View>
	                    <View style={styles.commit_container}>
	                      <TouchableOpacity style={styles.commit_button}>
	                        <Text style={styles.commit_text}>定制我的旅行</Text>
	                      </TouchableOpacity>
	                    </View>
	                  </View>
	              </View> 
              </ScrollView>
				 
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	contentContainerStyle: {
		flex: 1
	},
	scrollView: {
		flex: 1,
	},
	input_container: {
      width: phone_width,
      marginTop: 10,
      padding: 10,
    },
    input_row_container: {
      flexDirection: 'row',
    },
    text_input: {
      flex:1,
    },
    check_code_button: {
      flex:1,
      height:40,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    commit_container: {
      marginTop:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    commit_button: {
      width: phone_width*8/10,
      height: 40,
      backgroundColor: '#65B6BB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    commit_text: {
      color: '#ffffff',
      fontSize: 18,
    },
});