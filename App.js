import GoldMenu from './src/menu/Gold'
import CurrencyMenu from './src/menu/Currency';



import {createMaterialTopTabNavigator } from 'react-navigation';
import {Platform, StyleSheet} from 'react-native';



 




var MainScreenNavigator = createMaterialTopTabNavigator({
  Gold : { 
    screen : GoldMenu,
    navigationOptions:{
      tabBarLabel : 'Gold'
    }
  },
  Currency : { 
    screen : CurrencyMenu,
    navigationOptions:{
      tabBarLabel : 'Currency'  
    }
  }
},{
  swipeEnabled : true,
  tabBarPosition : 'top',
  tabBarOptions : {
    activeTintColor : 'yellow',
    style : {
      ...Platform.select({
        ios: {
          top : 0,
        },
        android: {
          top : 24,
        },
      })    
    }
  }

})


MainScreenNavigator.navigationOptions = {
  title:'App'

};



var tabStyle = StyleSheet.create({
    
})
export default MainScreenNavigator;
