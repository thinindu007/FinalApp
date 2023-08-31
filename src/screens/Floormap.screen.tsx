import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import Svg from 'react-native-svg';
import FloorplanSvg from '../assets/images/FloorPlan.svg';
import {styles} from '../styles/Floormap.styles';

const App: React.FC = () => {
  const [, setCoordinates] = useState({x: 0, y: 0});

  const handlePress = (event: any) => {
    const {locationX, locationY} = event.nativeEvent;
    setCoordinates({x: locationX, y: locationY});
    showCoordinatesPopup(locationX, locationY);
  };
  const showCoordinatesPopup = (x: number, y: number) => {
    Alert.alert(
      'Selected Area Coordinates',
      `X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}`,
    );
  };
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

export default App;
