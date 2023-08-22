import React from 'react';
import { TextInput } from 'react-native';
import { customTextInputStyles } from './textefieldStyles'; // Import the styles

const CustomTextInput = ({ placeholder, keyboardType, value, onChangeText }) => {
  return (
    <TextInput
      style={customTextInputStyles.input} // Use the imported styles
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextInput;
