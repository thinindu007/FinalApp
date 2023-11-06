import {StyleSheet} from 'react-native';
// Styling for the Floormap component
export const styles = StyleSheet.create({
  container: {
    flex: 1, // Taking the full available space
    backgroundColor: '#fefefa', // Setting background color to white
    alignItems: 'center', // Aligning items at the center horizontally
    justifyContent: 'center', // Aligning items at the center vertically
  },
  imageContainer: {
    width: 300, // Setting the width of the image container
    height: 300, // Setting the height of the image container
    alignItems: 'center', // Aligning items at the center horizontally
    justifyContent: 'center', // Aligning items at the center vertically
  },
  buttonContainer: {
    flexDirection: 'row', // Setting the direction of the container as row
    justifyContent: 'space-between', // Distributing space evenly between elements
    marginTop: 10, // Adding margin at the top
    position: 'absolute', // Setting the position to absolute
    bottom: 0, // Aligning the container at the bottom
    left: 0, // Aligning the container to the left
    right: 0, // Aligning the container to the right
    padding: 10, // Adding padding to the container
    backgroundColor: '#f8f8ff', // Setting the background color of the container
  },
  button: {
    backgroundColor: '#f8f8ff', // Setting the background color of the button
    padding: 10, // Adding padding to the button
    borderRadius: 5, // Adding border radius to the button
    marginLeft: 55, // Adding margin at the left
    marginRight: 55, // Adding margin at the right
  },
});
