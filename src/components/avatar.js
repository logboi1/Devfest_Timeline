import React from 'react';
import {StyleSheet, Dimensions, Image} from 'react-native';

const width = Dimensions.get('window').width;

const Avatar = ({source, size}) => {
  return (
    <>
      <Image
        style={{
          width: size || width / 15,
          height: size || width / 15,
          borderRadius: size ? size / 2 : width / 5,
          marginHorizontal: 3,
          marginBottom: 2.5,
        }}
        source={source}
      />
    </>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
