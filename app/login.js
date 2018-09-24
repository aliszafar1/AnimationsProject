import React from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import LottieView from "lottie-react-native";

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.showHideAnimation = this.showHideAnimation.bind(this);
    }
    state = {
        username: "",
        password: "",
        showAnimation: false
    }

    showHideAnimation(){
        const {navigation} = this.props;
        this.setState({showAnimation:true});
        const myVar = setInterval(() =>{
            this.setState({showAnimation:false});
            navigation.replace('Home')
            clearInterval(myVar);
        }, 250);
    }

    render(){
        const {showAnimation} = this.state;
        return (
            <View style={{flex:1,backgroundColor: "#fff", justifyContent: "center",}}>
            {showAnimation ?
                <View style={{flex:1, height:550, width:550}}>
                    <LottieView
                    style={{}}
                    source={require('../animations/bubble.json')}
                    autoPlay
                    loop
                />
                </View>
               :
               <View style={{marginHorizontal: 20, marginVertical: 20}}>
               <Text style={{textAlign: "center", fontSize: 30, color: "#91edf3"}}>Login</Text>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="gray"
                    style={{height: 40, borderColor:"#b7f4f8", borderBottomWidth: 1, marginVertical: 5}}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="gray"
                    style={{height: 40, borderColor: "#b7f4f8", borderBottomWidth: 1, marginVertical: 5}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <View style={{flex:1, alignItems: "center", marginTop: 10}}>
                <TouchableOpacity style={{borderWidth: 3,borderColor: "#91edf3", height:50, width:130, backgroundColor:"#b7f4f8"}}
                onPress={this.showHideAnimation}>
                    <Text style={{textAlign: "center",paddingTop:10, color:"#fff", fontSize: 20}}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
        }
        </View>
        )
    }
}