import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet, Text, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function CordinateScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedImageUri } = route.params;
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const latitudeRef = React.createRef();
  const longitudeRef = React.createRef();

  const SaveCordinates = () => {
    // Validate the input values before saving (e.g., check if they are not empty)
    if (!latitude || !longitude) {
      alert('Please enter valid coordinates.');
      return;
    }

    // Store the coordinates in your component's state
    setLatitude(latitude);
    setLongitude(longitude);

    // Clear the input fields
    // latitudeRef.current.clear();
    // longitudeRef.current.clear();
    alert('Cordinates are saved.');
    // Show the modal
    // setIsModalVisible(true);
  };

  const navigateToCompareCordinate = () => {
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
          onChangeText={(text) => setLatitude(text)}
        />
        <TextInput
          ref={longitudeRef}
          style={styles.input}
          placeholder="Longitude"
          onChangeText={(text) => setLongitude(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={SaveCordinates} color="#3498db" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={navigateToCompareCordinate} color="#3498db" />
        </View>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Saved Coordinates:</Text>
          <Text>Latitude: {latitude}</Text>
          <Text>Longitude: {longitude}</Text>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CordinateScreen;
