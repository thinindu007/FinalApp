import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  userInfoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userInfoText: {
    fontSize: 16,
    width: '80%',
    height: 40,
    borderColor: '#800080',
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logoutButton: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  uploadButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  imageuploadButton: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  imageuploadText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    flex: 1,
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10, // Added margin to separate the buttons
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
