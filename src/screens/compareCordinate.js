import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Import styles from your styles.js module
import CustomButton from '../components/button/button'; // Import the CustomButton component
import CustomTextInput from '../components/textinput/textinput'; // Import the CustomTextInput component
import { calculateDistance, degToRad } from '../helpers/calculateCordinate';

function CompareCordinate() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedImageUri, latitude: initialLatitude, longitude: initialLongitude } = route.params;
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [distance, setDistance] = useState('');

  const Calculate = () => {
    if (initialLatitude && initialLongitude && latitude && longitude) {
      const distances = calculateDistance(
        parseFloat(initialLatitude), // Float number
        parseFloat(initialLongitude),
        parseFloat(latitude),
        parseFloat(longitude)
      );
      setDistance(`${distances.km} km (${distances.miles} miles)`);
    } else {
      setDistance('Invalid coordinates');
    }
  };

  const handlePrevious = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      {selectedImageUri ? (
        <View style={styles.card}>
          <Text style={styles.title}>My Uploaded Pic</Text>
          <Image source={{ uri: selectedImageUri }} style={styles.image} />
        </View>
      ) : null}
      <View style={styles.card}>
        {/* Use the CustomTextInput component for Latitude */}
        <CustomTextInput
          placeholder="Latitude"
          keyboardType="phone-pad"
          value={latitude}
          onChangeText={(text) => setLatitude(text)}
        />
        {/* Use the CustomTextInput component for Longitude */}
        <CustomTextInput
          placeholder="Longitude"
          keyboardType="phone-pad"
          value={longitude}
          onChangeText={(text) => setLongitude(text)}
        />
        {/* Use the CustomButton component for the Calculate button */}
        <CustomButton title="Calculate" onPress={Calculate} color="#3498db" />
        <Text style={styles.distanceText}>{distance}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* Use the CustomButton component for the Previous button */}
        <CustomButton title="Previous" onPress={handlePrevious} color="#27ae60" />
      </View>
    </View>
  );
}

export default CompareCordinate;
