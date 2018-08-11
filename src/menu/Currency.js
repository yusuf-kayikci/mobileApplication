import React from 'react';
import { Text,View,StyleSheet } from 'react-native'
import MyCurrencyTab from '../tabs/CurrencyTabs/MyCurrencyTab'
import CurrencySimulatorTab from '../tabs/CurrencyTabs/CurrencySimulatorTab'
import CurrencyPricesTab from '../tabs/CurrencyTabs/CurrencyPricesTab'



import {createMaterialTopTabNavigator} from 'react-navigation'


var CurrencyNavigator = createMaterialTopTabNavigator({
    Simulator : { 
      screen : CurrencySimulatorTab,
      navigationOptions:{
        tabBarLabel : 'Simulator'  
      }
    },
    Prices : { 
      screen : CurrencyPricesTab,
      navigationOptions:{
        tabBarLabel : 'Prices'
      }
    },
    MyCurrency : { 
        screen : MyCurrencyTab,
        navigationOptions:{
          tabBarLabel : 'My Money'  
        }
      }
  },{
    swipeEnabled : true,  
    tabBarPosition : 'bottom',
    tabBarOptions : {
      activeTintColor : 'yellow'
    }
  
  })
  
export default class CurrencyMenu extends React.Component{
    render(){
        return(
                <CurrencyNavigator/>
        );
    }
}


var style = StyleSheet.create({
    PageStyle:{
        flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor : 'blue'
    },
    TextStle:{
        fontSize : 50
    }
})
