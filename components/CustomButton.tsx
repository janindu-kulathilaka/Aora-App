import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

// Define the type for the props
interface CustomButtonProps {
  title?: string;
  handlePress?: (event: GestureResponderEvent) => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

// Use the props type in the component
const CustomButton: React.FC<CustomButtonProps> = ({
  title = 'Button',
  handlePress,
  containerStyles = '',
  textStyles = '',
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[50px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
    >
      <Text className={`text-primary font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
