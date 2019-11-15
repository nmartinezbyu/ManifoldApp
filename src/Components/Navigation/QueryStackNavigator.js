import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Query from '../Query/Query';
import QueryList from '../QueryList/QueryList';

const QueryStackNavigator =
  createStackNavigator(
    {
      QueryList: {
        screen: QueryList,
        navigationOptions: { headerTitle: "Queries", headerStyle: { backgroundColor: "rgba(15,134,193,.7)" }, headerTintColor: '#fff' }
      },
      Query: {
        screen: Query,
        navigationOptions: { headerTitle: "Query", headerStyle: { backgroundColor: "rgba(15,134,193,.7)" }, headerTintColor: '#fff'  }
      }
    }
  );

export default createAppContainer(QueryStackNavigator);
