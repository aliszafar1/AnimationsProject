import React from "react";
import {View, Text,TouchableOpacity} from "react-native";

export default class HomeScreen extends React.Component{
    render(){
        const {navigation} = this.props;
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}>
                <Text style={{fontSize: 20, color:"#91edf3"}}>Home Component</Text>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Profile");
                }}
                style={{borderWidth: 3,borderColor: "#91edf3", height:50, width:130, backgroundColor:"#b7f4f8"}}>
                <Text style={{textAlign: "center",paddingTop:10, color:"#fff", fontSize: 20}}>Goto Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}