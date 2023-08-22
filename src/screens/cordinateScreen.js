import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles'; // Import styles from your styles.js module
import CustomButton from '../components/button/button'; // Import the CustomButton component
import CustomTextInput from '../components/textinput/textinput'; // Import the CustomTextInput component

function CoordinateScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedImageUri } = route.params;
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const SaveCoordinates = () => {
    if (!latitude || !longitude) {
      alert('Please enter valid coordinates.');
      return;
    }

    setLatitude(latitude);
    setLongitude(longitude);
    alert('Coordinates are saved.');
  };

  const navigateToCompareCoordinate = () => {
    if (!latitude || !longitude) {
      alert('Please enter valid coordinates before proceeding.');
      return;
    }

    navigation.navigate('CompareCordinate', {
      selectedImageUri,
      latitude,
      longitude,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {selectedImageUri ? (
          <>
            <Text style={styles.title}>My Uploaded Pic</Text>
            <Image source={{ uri: selectedImageUri }} style={styles.image} />
          </>
        ) : null}
      </View>
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
        <View style={styles.buttonContainer}>
          {/* Use the CustomButton component for Save */}
          <CustomButton title="Save" onPress={SaveCoordinates} color="#3498db" />
        </View>
        <View style={styles.buttonContainer}>
          {/* Use the CustomButton component for Next */}
          <CustomButton title="Next" onPress={navigateToCompareCoordinate} color="#3498db" />
        </View>
      </View>
    </View>
  );
}

export default CoordinateScreen;
