import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Hashtag = ({label, selected, onPress}) => {
  const hashtagStyle = selected
    ? styles.selectedHashtag
    : styles.deselectedHashtag;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={hashtagStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deselectedHashtag: {
    color: 'blue', // Adjust the color for deselected hashtags
    fontSize: 16,
    margin: 5,
  },
  selectedHashtag: {
    color: 'green', // Adjust the color for selected hashtags
    fontSize: 16,
    margin: 5,
  },
});

export default Hashtag;
