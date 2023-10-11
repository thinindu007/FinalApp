import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {useDispatch, useSelector} from 'react-redux';
import {clearLoginData} from '../reducers/LoginReducer';
import {styles} from '../styles/User.styles';
interface UserScreenProps {
  navigation: any;
}
const UserScreen: React.FC<UserScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {username, password} = useSelector((state: any) => state.login);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const handleLogout = () => {
    dispatch(clearLoginData());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
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
          setSelectedImage(uri);
          const base64Image = await imageUriToBse64(uri);
          setImageBase64(base64Image);
        }
      },
    );
  };
  const imageUriToBse64 = async (uri: string): Promise<string> => {
    let filePath = '';
    if (Platform.OS === 'ios') {
      filePath = uri.replace('file:', '');
    } else {
      filePath = uri;
    }
    return await ReactNativeBlobUtil.fs.readFile(filePath, 'base64');
  };
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        {selectedImage && (
          <Image
            source={{uri: selectedImage}}
            style={{width: 100, height: 100}}
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
    </View>
  );
};

export default UserScreen;