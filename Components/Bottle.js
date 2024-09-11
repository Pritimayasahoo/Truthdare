import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Bottle = () => {
  const [rotation] = useState(new Animated.Value(0));

  const rotateBottle = () => {
    Animated.timing(rotation, {
      toValue: Math.random() * 360,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const rotationInterpolation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity onPress={rotateBottle}>
      <Animated.Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1985/1985061.png' }}
        style={[styles.bottle, { transform: [{ rotate: rotationInterpolation }] }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Bottle;
