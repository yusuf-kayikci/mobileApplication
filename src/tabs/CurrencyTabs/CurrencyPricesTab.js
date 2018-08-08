import React from 'react';
import { Text,View,StyleSheet,ListView } from 'react-native'



var CurrencyModel = [{
    "Name" : null,
    "Buying" : null,
    "Selling" : null
}];


export default class CurrencyPricesTab extends React.Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
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
                CurrencyModel.push(
                    {
                        "Name" : xml.getElementsByTagName('CurrencyName')[i].value,
                        "Buying" : xml.getElementsByTagName('ForexBuying')[i].value,
                        "Selling" : xml.getElementsByTagName('ForexSelling')[i].value
                    })                
            }
            console.log(CurrencyModel);

        }).catch((err) => {
            console.log('fetch', err)
        })
    }


    componentDidMount(){
        this.getData();
    }



    render(){
        return(
            <ListView
            dataSource={this.state.dataSource}
            renderRow={(CurrencyModel) => <Text>{CurrencyModel["Name"]}</Text>}
          />

        );
    }
}


var style = StyleSheet.create({
    PageStyle:{
        flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor : 'white'
    },
    TextStle:{
        fontSize : 20
    }
})
