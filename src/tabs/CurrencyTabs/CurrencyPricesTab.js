import React from 'react';
import { Text,View,StyleSheet,ScrollView,RefreshControl } from 'react-native'

import { Table, Row, Rows } from 'react-native-table-component';
import { resolve } from 'url';




var CurrencyModel =[];


export default class CurrencyPricesTab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            refreshing : false,
            CurrencyData : []
        };
    }


    getData(){  
        return new Promise((resolve,reject)=>{
            fetch('https://www.doviz.com/api/v1/currencies/all/latest')
            .then(response => response.json())
            .then((response) => {
                CurrencyModel = [];
                for(var i = 0;i < 14;i++){
                    var CurrencyItem = [];
                    CurrencyItem.push(response[i]['full_name']);
                    CurrencyItem.push(response[i]['buying'].toFixed(3));
                    CurrencyItem.push(response[i]['selling'].toFixed(3));
                    CurrencyModel.push(CurrencyItem);
                }            
                this.setState({
                    CurrencyData : CurrencyModel
                })
                resolve();    
                console.log(CurrencyModel);            
            }).catch((err) => {
                reject(err);
                console.log('fetch', err)
            })
        })

    }


    componentDidMount(){
        this.getData();
    }

    _onRefresh = () => {
        this.setState({refreshing : true})
        this.getData().then(()=>{
            this.setState({
                refreshing : false
            })
        }).catch(err=> {
            coonsole.log(err);
        }) 
      }


    _refreshControl(){
      return (
        <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh}/>
      )
    }
    renderTable(){
        return(
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={['Name','Buying','Selling']} style={table_style.head} textStyle={table_style.text}/>
              <Rows data={this.state.CurrencyData} textStyle={table_style.text}/>
            </Table>
        );
    }

    render(){
        return(
        <ScrollView style={style.container} refreshControl = {this._refreshControl()}>
            {this.renderTable()}
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


