import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet, Text, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function CoordinateScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedImageUri } = route.params;
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const latitudeRef = React.createRef();
  const longitudeRef = React.createRef();

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
        <TextInput
          ref={latitudeRef}
          style={styles.input}
          placeholder="Latitude"
          keyboardType={"phone-pad"}
          onChangeText={(text) => setLatitude(text)}
        />
        <TextInput
          ref={longitudeRef}
          style={styles.input}
          placeholder="Longitude"
          keyboardType={"phone-pad"}
          onChangeText={(text) => setLongitude(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={SaveCoordinates} color="#3498db" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={navigateToCompareCoordinate} color="#3498db" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
  
});

export default CoordinateScreen;
