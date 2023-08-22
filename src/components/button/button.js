import React from 'react';
import { Button } from 'react-native';

const CustomButton = ({ title, onPress, color }) => {
  return <Button title={title} onPress={onPress} color={color} />;
};

export default CustomButton;
