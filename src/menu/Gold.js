import React from 'react';
import { Text,View,StyleSheet } from 'react-native'

import GoldPrcesTab from '../tabs/GoldTabs/GoldPricesTab'
import GoldSimulatorTab from '../tabs/GoldTabs/GoldSimulatorTab'
import MyGoldTab from '../tabs/GoldTabs/MyGoldTab'



import {createMaterialTopTabNavigator} from 'react-navigation'


var GoldNavigator = createMaterialTopTabNavigator({
    Prices : { 
      screen : GoldPrcesTab,
      navigationOptions:{
        tabBarLabel : 'Prices'
      }
    },
    Simulator : { 
      screen : GoldSimulatorTab,
      navigationOptions:{
        tabBarLabel : 'Simulator'  
      }
    },
    MyCurrency : { 
        screen : MyGoldTab,
        navigationOptions:{
          tabBarLabel : 'My Gold'  
        }
      }
  },{
    swipeEnabled : true,  
    tabBarPosition : 'bottom',
    tabBarOptions : {
        activeTintColor : 'yellow',
        
    }
  
  })

export default class GoldMenu extends React.Component{
    render(){
        return(
            <GoldNavigator style = {style.PageStyle}/>
        );
    }
}


var style = StyleSheet.create({
    PageStyle:{
        flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor : 'yellow'
    },
    TextStle:{
        fontSize : 20
    }
})
