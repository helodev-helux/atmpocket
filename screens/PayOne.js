import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Icon} from "react-native-elements"


export default class PayOne extends React.Component {

    constructor(props){
        super(props)
    }

    getUserDetail=()=>{
        fetch("https://pocketatm.pythonanywhere.com/fetchOperationSuspecte/",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accountNumber: this.props.accountNumber,
                accountPwd: this.props.accountPwd,
                gpsData:this.props.gpsData,
                phoneDetails:this.props.phoneDetails
            })
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({userOperationsDetails:responseJson.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <View>
                <Header 
                    leftComponent={{icon : "menu",color:"#fff"}}
                    centerComponent={{text:"ATM Pocket",style:{color:"#fff"}}} 
                    />
            </View>
        )
    }
}