import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import RNReactNativeCmd from 'react-native-cmd';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "init state"
    }
    this.onPressExecuteCmd = this.onPressExecuteCmd.bind(this); //bind this
  }
  render() {
    return (
      <View>
        <Text >{this.state.textValue}</Text>
        <Button onPress={this.onPressExecuteCmd} title='EXECUTECMD'/>
      </View>
    );
  }
  async onPressExecuteCmd() {
    let resultStr = await RNReactNativeCmd.executeCmd('chmod u+x ');
    console.log("react-native-cmd resultStr length:", resultStr.length, ",type is:", typeof resultStr);
    let substr = resultStr.substring(resultStr.length - 50, resultStr.length);
    this.setState({textValue:substr}); //set the last 50 characters to textValue
  }
}