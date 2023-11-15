import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {useDispatch, useSelector} from 'react-redux';
import {clearLoginData} from '../reducers/LoginReducer'; //Importing the necessary action to clear login data
import {
  setProfilePicture,
  clearProfilePicture,
} from '../reducers/ProfileReducer'; // Importing actions related to profile picture
import {styles} from '../styles/User.styles'; //Importing the styles for user screen
import Icon from 'react-native-vector-icons/FontAwesome5';
import {clearTask} from '../reducers/TaskReducer';

// Defining the UserScreen component
interface UserScreenProps {
  navigation: any;
}

const UserScreen: React.FC<UserScreenProps> = ({navigation}) => {
  const dispatch = useDispatch(); // Accessing the dispatch function from Redux
  const {username, password} = useSelector((state: any) => state.login); // Accessing username and password from the login state
  const {profilePicture} = useSelector((state: any) => state.profile); // Accessing the profile picture from the profile state

  const [selectedImage, setSelectedImage] = useState<string | null>(
    profilePicture,
  ); // Setting up state for the selected image
  const [imageBase64, setImageBase64] = useState<string | null>(null); // Setting up state for the base64 encoded image

  // Function to handle the logout process
  const handleLogout = () => {
    dispatch(clearLoginData()); // Dispatching the action to clear login data
    dispatch(clearTask());
    dispatch(clearProfilePicture()); // Dispatching the action to clear profile picture
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}], // Resetting the navigation stack to the Login screen
    });
  };

  // Function to pick an image from the device's gallery
  const pickImage = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        maxWidth: 1000,
        maxHeight: 1000,
        quality: 0.5,
      },
      async response => {
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            const base64Image = await imageUriToBase64(uri); // Converting the image URI to base64
            setImageBase64(base64Image);

            dispatch(setProfilePicture(base64Image)); // Dispatching the action to set the profile picture
          } else {
            console.error('No image URI found.');
          }
        }
      },
    );
  };

  // Function to convert image URI to base64 format
  const imageUriToBase64 = async (uri: string): Promise<string> => {
    let filePath = '';
    if (Platform.OS === 'ios' && uri.startsWith('file://')) {
      filePath = uri.replace('file://', '');
    } else {
      filePath = uri;
    }
    return await ReactNativeBlobUtil.fs.readFile(filePath, 'base64');
  };

  // Rendering the UI components for the UserScreen
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        {selectedImage && (
          <Image
            source={{uri: `data:image/png;base64,${selectedImage}`}} // Displaying the selected image
            style={{width: 100, height: 100}} // Setting the dimensions of the image
          />
        )}
        <TouchableOpacity style={styles.imageuploadButton} onPress={pickImage}>
          <Text style={styles.imageuploadText}>Select Profile Image</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.userInfoText}>{username}</Text>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.userInfoText}>{password}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Task')}>
          <Icon name="tasks" size={30} color="#800080" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FloorMap')}>
          <Icon name="map" size={30} color="#800080" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen; //Exporting the userscreen component
