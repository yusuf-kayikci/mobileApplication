import React from 'react';
import { Text,View,StyleSheet,ScrollView } from 'react-native'

import { Table, Row, Rows } from 'react-native-table-component';





var CurrencyModel =[];


export default class CurrencyPricesTab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            CurrencyData : []
        };
    }


    getData(){
        fetch('http://www.tcmb.gov.tr/kurlar/today.xml')
        .then(response => response.text())
        .then((response) => {
            var XMLParser = require('react-xml-parser');
            var xml = new XMLParser().parseFromString(response);    // Assume xmlText contains the example XML

            CurrencyModel.pop();
            for(var i = 0;i < xml.getElementsByTagName('CurrencyName').length;i++){
                var CurrencyItem = [];
                CurrencyItem.push(xml.getElementsByTagName('Isim')[i].value);
                CurrencyItem.push(xml.getElementsByTagName('ForexBuying')[i].value);
                CurrencyItem.push(xml.getElementsByTagName('ForexSelling')[i].value);
                CurrencyModel.push(CurrencyItem);
            }
            console.log(CurrencyModel);
            this.setState({
                CurrencyData : CurrencyModel
            })

        }).catch((err) => {
            console.log('fetch', err)
        })
    }


    componentDidMount(){
        this.getData();
    }



    render(){
        return(
        <ScrollView style={style.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={['Name','Buying','Selling']} style={table_style.head} textStyle={table_style.text}/>
              <Rows data={this.state.CurrencyData} textStyle={table_style.text}/>
            </Table>
        </ScrollView>

        );
    }
}


var style = StyleSheet.create({
    PageStyle:{
        flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor : 'white'
    },
    TextStle:{
        fontSize : 20
    },
    container: { 
        flex: 1,
        marginTop : 20
        
    },
})


var table_style = StyleSheet.create({
        head: { height: 40, backgroundColor: '#f1f8ff' },
        text: { margin: 6 }
})
