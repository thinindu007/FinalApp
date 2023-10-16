import {StyleSheet} from 'react-native';

// Styling for the UserScreen component
export const styles = StyleSheet.create({
  container: {
    flex: 1, // Taking the full available space
    padding: 20, // Adding padding to the container
    paddingTop: 50, // Adding padding to the top of the container
    alignItems: 'center', // Aligning items at the center horizontally
    backgroundColor: 'white', // Setting background color to white
  },
  userInfoContainer: {
    width: '100%', // Setting the width of the user info container
    alignItems: 'center', // Aligning items at the center horizontally
    marginTop: 20, // Adding margin at the top
  },
  label: {
    fontSize: 16, // Setting the font size of the label
    fontWeight: 'bold', // Setting the font weight of the label
    marginTop: 10, // Adding margin at the top
  },
  userInfoText: {
    fontSize: 16, // Setting the font size of the user info text
    width: '80%', // Setting the width of the user info text
    height: 40, // Setting the height of the user info text
    borderColor: '#800080', // Setting the border color
    borderWidth: 3, // Adding a border to the user info text
    marginBottom: 20, // Adding margin at the bottom
    paddingHorizontal: 10, // Adding horizontal padding
  },
  logoutButton: {
    backgroundColor: '#800080', // Setting the background color of the logout button
    padding: 10, // Adding padding to the logout button
    borderRadius: 5, // Adding border radius to the logout button
    marginTop: 20, // Adding margin at the top
  },
  logoutButtonText: {
    color: 'white', // Setting the text color of the logout button
    textAlign: 'center', // Centering the text within the logout button
    fontWeight: 'bold', // Setting the text to be bold
  },
  uploadButton: {
    backgroundColor: '#800080', // Setting the background color of the upload button (Note: Should this be imageuploadButton?)
    padding: 10, // Adding padding to the upload button
    borderRadius: 5, // Adding border radius to the upload button
    marginTop: 20, // Adding margin at the top
  },
  uploadButtonText: {
    color: 'white', // Setting the text color of the upload button (Note: Should this be imageuploadText?)
    textAlign: 'center', // Centering the text within the upload button (Note: Should this be imageuploadText?)
    fontWeight: 'bold', // Setting the text to be bold
  },
  profilePicture: {
    width: 200, // Setting the width of the profile picture
    height: 200, // Setting the height of the profile picture
    borderRadius: 100, // Setting the border radius of the profile picture to make it circular
    marginBottom: 20, // Adding margin at the bottom
  },
  imageuploadButton: {
    backgroundColor: '#800080', // Setting the background color of the image upload button
    padding: 10, // Adding padding to the image upload button
    borderRadius: 5, // Adding border radius to the image upload button
    marginTop: 20, // Adding margin at the top
  },
  imageuploadText: {
    color: 'white', // Setting the text color of the image upload button
    textAlign: 'center', // Centering the text within the image upload button
    fontWeight: 'bold', // Setting the text to be bold
  },
  buttonContainer: {
    flexDirection: 'row', // Setting the direction of the container as row
    justifyContent: 'space-between', // Distributing space evenly between elements
    marginTop: 20, // Adding margin at the top
    position: 'absolute', // Setting the position to absolute
    bottom: 0, // Aligning the container at the bottom
    left: 0, // Aligning the container to the left
    right: 0, // Aligning the container to the right
    padding: 10, // Adding padding to the container
    backgroundColor: '#f9f9f9', // Setting the background color of the container
  },
  button: {
    flex: 1, // Taking the remaining space in the container
    backgroundColor: '#800080', // Setting the background color of the button
    padding: 15, // Adding padding to the button
    borderRadius: 5, // Adding border radius to the button
    marginHorizontal: 10, // Adding horizontal margin to separate the buttons
  },
  buttonText: {
    color: 'white', // Setting the text color of the button
    textAlign: 'center', // Centering the text within the button
    fontWeight: 'bold', // Setting the text to be bold
  },
});
