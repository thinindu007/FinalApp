import {StyleSheet} from 'react-native';

//styling for the Login screen component
export const styles = StyleSheet.create({
  container: {
    flex: 1, //taking the full available space
    justifyContent: 'center', //centering vertically
    alignItems: 'center', //centering horizontally
    padding: 20, //adding padding to the container
    backgroundColor: '#fefefa', //setting background color to white
  },
  input: {
    width: '80%', // Setting the width of the input field
    height: 40, // Setting the height of the input field
    borderColor: '#e4cae4', // Setting the border color
    borderWidth: 2, // Adding a border to the input field
    marginBottom: 20, // Adding margin at the bottom
    paddingHorizontal: 10, // Adding horizontal padding
    borderRadius: 15,
    backgroundColor: '#e9e8e8',
  },
  button: {
    backgroundColor: '#800080', // Setting the background color of the button
    padding: 10, // Adding padding to the button
    borderRadius: 5, // Adding border radius to the button
  },
  buttonText: {
    color: 'white', // Setting the text color of the button
    textAlign: 'center', // Centering the text within the button
    fontWeight: 'bold', // Setting the text to be bold
  },
  imageContainer: {
    width: '80%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
});
