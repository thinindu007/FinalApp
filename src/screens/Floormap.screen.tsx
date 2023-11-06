import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import Svg from 'react-native-svg';
import FloorplanSvg from '../assets/images/FloorPlan.svg'; //Importing the svg image
import {styles} from '../styles/Floormap.styles'; //Importing styles for the Floormap component
import Icon from 'react-native-vector-icons/FontAwesome5';

interface FloorMapScreenProps {
  navigation: any;
}

const App: React.FC<FloorMapScreenProps> = ({navigation}) => {
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Task')}>
          <Icon name="tasks" size={30} color="#800080" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('User')}>
          <Icon name="user-circle" size={30} color="#800080" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App; //Exporting the Floormap component
