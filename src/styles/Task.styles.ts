import {StyleSheet} from 'react-native';

// Styling for the TaskScreen component
export const styles = StyleSheet.create({
  container: {
    flex: 1, // Taking the full available space
    padding: 20, // Adding padding to the container
    backgroundColor: 'white', // Setting background color to white
  },
  inputContainer: {
    marginTop: 10, // Adding margin at the top
    flexDirection: 'row', // Setting the direction of the container as row
    marginBottom: 20, // Adding margin at the bottom
  },
  input: {
    flex: 1, // Taking the remaining space in the container
    height: 40, // Setting the height of the input field
    borderWidth: 1, // Adding a border to the input field
    borderColor: '#800080', // Setting the border color
    marginRight: 10, // Adding margin at the right
    paddingHorizontal: 10, // Adding horizontal padding
  },
  addButton: {
    backgroundColor: '#800080', // Setting the background color of the button
    padding: 10, // Adding padding to the button
    borderRadius: 5, // Adding border radius to the button
  },
  addButtonText: {
    color: 'white', // Setting the text color of the button
    textAlign: 'center', // Centering the text within the button
    fontWeight: 'bold', // Setting the text to be bold
  },
  taskItem: {
    flexDirection: 'row', // Setting the direction of the task item as row
    justifyContent: 'space-between', // Distributing space evenly between elements
    alignItems: 'center', // Aligning items at the center
    backgroundColor: '#f9f9f9', // Setting the background color of the task item
    padding: 10, // Adding padding to the task item
    marginBottom: 5, // Adding margin at the bottom
    borderRadius: 5, // Adding border radius to the task item
  },
  taskText: {
    flex: 1, // Taking the full available space
  },
  deleteButton: {
    color: 'red', // Setting the text color to red
    marginLeft: 10, // Adding margin at the left
  },
  editTaskInput: {
    flex: 1, // Taking the full available space
    height: 40, // Setting the height of the input field
    borderWidth: 1, // Adding a border to the input field
    borderColor: '#800080', // Setting the border color
    paddingHorizontal: 10, // Adding horizontal padding
    backgroundColor: '#f9f9f9', // Setting the background color of the input field
  },
  editButton: {
    color: '#800080', // Setting the text color of the button
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
    marginLeft: 10, // Adding margin at the left
    marginRight: 10, // Adding margin at the right
  },
  buttonText: {
    color: 'white', // Setting the text color of the button
    textAlign: 'center', // Centering the text within the button
    fontWeight: 'bold', // Setting the text to be bold
  },
});
