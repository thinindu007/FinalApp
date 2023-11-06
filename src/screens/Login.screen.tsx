import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoginData} from '../reducers/LoginReducer'; //Importing the necassary reducer for handle login data
import LogScreensvg from '../assets/images/LogScreen.svg';
import {styles} from '../styles/Login.styles'; //importing the styles for the login page
import Svg from 'react-native-svg';

//Defining the Loginscreen component
const LoginScreen: React.FC<any> = ({navigation}) => {
  const dispatch = useDispatch(); //Accessing the dispatch function from redux
  const [username, setUsername] = useState(''); //setting up state for username
  const [password, setPassword] = useState(''); //Setting up state for password

  //Function to handle the log in process
  const handleLogin = () => {
    if (!username || !password) {
      //Checking if both username and password are provided
      Alert.alert(
        'Please Enter Your Details',
        'Both Username and Password are required.',
      );
    } else {
      dispatch(setLoginData({username, password})); //Dispatching the action to set the log in data
      navigation.navigate('Task'); //navigating to task screen after succesfully login
    }
  };

  //Rendering UI components for the log in screen
  return (
    <View style={styles.container}>
      <Svg style={styles.imageContainer}>
        <LogScreensvg />
      </Svg>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry //Ensuring the password input is masked
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen; //exporting the login screen component
