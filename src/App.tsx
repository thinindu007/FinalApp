import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/Login.screen';
import {store} from './redux/store'; // Import the store directly
import TaskScreen from './screens/Task.screen';
import UserScreen from './screens/User.screen';
import FloorMapScreen from './screens/Floormap.screen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Task" component={TaskScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="FloorMap" component={FloorMapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
