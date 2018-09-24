import React, {Component} from 'react';
import {View} from "react-native";
import LottieView from "lottie-react-native";
import {RootStack} from "./app/routes";


export default class App extends Component{
  state={showAnimation:true}
  componentWillMount(){
    const myVar = setInterval(() =>{
      this.setState({showAnimation:false});
      clearInterval(myVar);
  }, 3500);
  }
  render() {
    const {showAnimation} = this.state;
    return (
    <View style={{flex:1}}>
      {showAnimation ?
                <View style={{flex:1}}>
                    <LottieView
                    style={{}}
                    source={require('./animations/swiftkey-logo.json')}
                    autoPlay
                    loop
                />
                </View>
               :
               <RootStack />}
    </View>)
  }
}
