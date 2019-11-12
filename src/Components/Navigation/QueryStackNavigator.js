import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Query from '../Query/Query';
import QueryList from '../QueryList/QueryList';

const QueryStackNavigator =
  createStackNavigator(
    {
      QueryList: {
        screen: QueryList,
        navigationOptions: { headerTitle: "Queries"  }
      },
      Query: {
        screen: Query,
        navigationOptions: { headerTitle: "Query"  }
      }
    }
  );

export default createAppContainer(QueryStackNavigator);
