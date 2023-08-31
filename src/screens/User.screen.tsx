//UserScreen.tsx
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// import {
//   launchImageLibrary,
//   ImagePickerResponse,
// } from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {clearLoginData} from '../reducers/LoginReducer';
import {styles} from '../styles/User.styles';

interface UserScreenProps {
  navigation: any;
}
const UserScreen: React.FC<UserScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {username, password} = useSelector((state: any) => state.login);
  const [profilePicture, setProfilePicture] = React.useState<string | null>(
    null,
  );
  const handleLogout = () => {
    dispatch(clearLoginData());

    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const handleUploadImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    // launchImageLibrary(options, (response: ImagePickerResponse) => {
    //   if (!response.didCancel && !response.error) {
    //     setProfilePicture(response.assets[]);
    //   }
    // });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.userInfoText}>{username}</Text>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.userInfoText}>{password}</Text>

        {profilePicture && (
          <Image source={{uri: profilePicture}} style={styles.profilePicture} />
        )}

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleUploadImage}>
          <Text style={styles.uploadButtonText}>Upload Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;
