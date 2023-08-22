import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen Component', () => {
  test('Renders without crashing', () => {
    const { getByText } = render(<HomeScreen />);
    
    const clickPhotoButton = getByText('Click Photo');
    expect(clickPhotoButton).toBeTruthy();
  });

  test('Click Photo button opens camera', () => {
    const { getByText } = render(<HomeScreen />);
    
    const clickPhotoButton = getByText('Click Photo');
    fireEvent.press(clickPhotoButton);

  });

  test('Pick Image button functionality', () => {
    const { getByText } = render(<HomeScreen />);
    
    const pickImageButton = getByText('Pick Image');
    fireEvent.press(pickImageButton);

  });

  test('Enter Coordinates button functionality', () => {
    const { getByText } = render(<HomeScreen />);
    
    const enterCoordinatesButton = getByText('Enter Coordinates');
    fireEvent.press(enterCoordinatesButton);

  });
});
