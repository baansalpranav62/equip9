import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CoordinateScreen from './CoordinateScreen';

describe('CoordinateScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<CoordinateScreen />);

    expect(getByPlaceholderText('Latitude')).toBeTruthy();
    expect(getByPlaceholderText('Longitude')).toBeTruthy();

    expect(getByText('Save')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
  });

  it('handles input changes correctly', () => {
    const { getByPlaceholderText } = render(<CoordinateScreen />);

    const latitudeInput = getByPlaceholderText('Latitude');
    const longitudeInput = getByPlaceholderText('Longitude');

    fireEvent.changeText(latitudeInput, '37.7749');
    fireEvent.changeText(longitudeInput, '-122.4194');

    expect(latitudeInput.props.value).toBe('37.7749');
    expect(longitudeInput.props.value).toBe('-122.4194');
  });

  it('handles "Save" button click correctly', () => {
    const { getByText } = render(<CoordinateScreen />);
    const saveButton = getByText('Save');

    fireEvent.press(saveButton);

    expect(alert).toHaveBeenCalledWith('Coordinates are saved.');
  });

  it('handles "Next" button click correctly', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<CoordinateScreen navigation={navigation} />);
    const nextButton = getByText('Next');

  
    fireEvent.press(nextButton);

    expect(navigation.navigate).toHaveBeenCalledWith('CompareCordinate', {
      selectedImageUri: undefined, 
      latitude: '', 
      longitude: '',
    });
  });
});
