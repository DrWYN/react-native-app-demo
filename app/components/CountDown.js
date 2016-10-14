
/**
* 倒计时组件
*/
import React, {PropTypes, Component} from 'react';
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

import StyleSheetPropType from 'StyleSheetPropType';
import ViewStylePropTypes from 'ViewStylePropTypes';
import TextStylePropTypes from 'TextStylePropTypes';

let ViewStylePropType = StyleSheetPropType(ViewStylePropTypes);
let TextStylePropType = StyleSheetPropType(TextStylePropTypes);

const propTypes = {
  systime: PropTypes.number,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  textStyle: TextStylePropTypes,
  dotStyle: TextStylePropTypes
}


class CountDown extends Component{
  constructor(props){
    super(props);
    this.state = {
      systemTime: this.props.systime
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.systime !== this.props.systime){
      this.setState({systemTime: nextProps.systime});
    }
  }

  componentDidMount() {
    let scope = this;
    this.counter = setInterval(function() {
      scope.setState({
        systemTime: scope.state.systemTime + 1000
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

   // 剁手价计算时间
    getSeckCountdownValue(systime, time) {
      let countdown;
      if (systime < time) {
        countdown = (time - systime) / 1000;
      } else {
        countdown = ( systime - time) / 1000;
      }
      return {
        hour:("0" + Math.floor(countdown / 3600)).slice(-2),
        minute: ("0" + Math.floor(( countdown - parseInt(countdown / 3600) * 3600 ) / 60)).slice(-2),
        second: ("0" + Math.floor(countdown % 60)).slice(-2)
      }
    }

  render() {
    let systime = this.state.systemTime;
    let startTime = this.props.startTime || 0;
    let endTime = this.props.endTime || 0;

    let left;

    if(systime > startTime){
      left = this.getSeckCountdownValue(systime, endTime);
    }else{
      left = this.getSeckCountdownValue(systime, startTime);
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.text,this.props.textStyle]}>{left.hour || 0}</Text>
        <Text style={[styles.dot, this.props.dotStyle]}> : </Text>
        <Text style={[styles.text,this.props.textStyle]}>{left.minute || 0}</Text>
        <Text style={[styles.dot, this.props.dotStyle]}> : </Text>
        <Text style={[styles.text,this.props.textStyle]}>{left.second || 0}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 3,
    paddingRight: 3,
  },
  dot: {
    color: '#000'
  }
})

export default CountDown;