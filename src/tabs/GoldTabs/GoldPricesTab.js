import React from 'react';
import { Text,View,StyleSheet, ScrollView,RefreshControl } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';

var GoldModel = [];
export default class GoldPricesTab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            GoldData : []
        }
    }

    getGoldData(){

        return new Promise((resolve,reject)=>{

            fetch('https://www.doviz.com/api/v1/golds/all/latest')
            .then(response => response.json())
            .then((response) => {
                for(var i = 0;i < response.length;i++){
                    var GoldItem = [];
                    GoldItem.push(response[i]['full_name']);
                    GoldItem.push(response[i]['buying'].toFixed(2));
                    GoldItem.push(response[i]['selling'].toFixed(2));
                    GoldModel.push(GoldItem);
                }            
                this.setState({
                    refreshing : false,
                    GoldData : GoldModel
                })    
                console.log(GoldModel);            
                resolve();
    
            }).catch((err) => {
                reject(err);
            })
    
        })
    }



    componentWillMount(){
        this.getGoldData();
    }

    _onRefresh = () => {
        this.setState({refreshing : true})
        this.getGoldData().then(()=>{
            this.setState({
                refreshing : false
            })
        }).catch(err=> {
            coonsole.log(err);
        }) 
      }




    renderTable() {
        return(
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={['Name','Buying','Selling']} style={table_style.head} textStyle={table_style.text}/>
                    <Rows data={this.state.GoldData} textStyle={table_style.text}/>
                </Table>
        );
    }

    _refreshControl(){
        return (
          <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}/>
        )
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
