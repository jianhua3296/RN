import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screen/SearchScreen';
import ResultShowScreen from './src/screen/ResultShowScreen';


//done
const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    ResultShowScreen: ResultShowScreen,
  },
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'Beemo App',
    },
  }
);

export default createAppContainer(navigator);
