import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import Svg from 'react-native-svg';
import FloorplanSvg from '../assets/images/FloorPlan.svg'; //Importing the svg image
import {styles} from '../styles/Floormap.styles'; //Importing styles for the Floormap component

const App: React.FC = () => {
  const [, setCoordinates] = useState({x: 0, y: 0}); // Initializing state for coordinates

  // Function to handle the press event on the floor map
  const handlePress = (event: any) => {
    const {locationX, locationY} = event.nativeEvent;
    setCoordinates({x: locationX, y: locationY}); // Updating the coordinates state
    showCoordinatesPopup(locationX, locationY); // Showing the coordinates in a popup
  };
  // Function to display the coordinates in an alert popup
  const showCoordinatesPopup = (x: number, y: number) => {
    Alert.alert(
      'Selected Area Coordinates', // Setting the title of the alert popup
      `X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}`, // Displaying the X and Y coordinates with two decimal points
    );
  };
  // Rendering the UI components for the Floormap
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
        <Svg width={300} height={300}>
          <FloorplanSvg width={300} height={300} />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default App; //Exporting the Floormap component
