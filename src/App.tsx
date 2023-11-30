import React from 'react';
import {Provider} from 'react-redux'; // Importing the Provider from react-redux
import {NavigationContainer} from '@react-navigation/native'; // Importing the NavigationContainer from @react-navigation/native
import {createStackNavigator} from '@react-navigation/stack'; // Importing createStackNavigator from @react-navigation/stack
import LoginScreen from './screens/login/Login.screen'; // Importing the LoginScreen component
import {store} from './redux/store'; // Importing the Redux store
import TaskScreen from './screens/task/Task.screen'; // Importing the TaskScreen component
import UserScreen from './screens/user/User.screen'; // Importing the UserScreen component
import FloorMapScreen from './screens/floormap/Floormap.screen'; // Importing the FloorMapScreen component

const Stack = createStackNavigator(); // Creating a stack navigator

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
export default App; //Exporting the application
