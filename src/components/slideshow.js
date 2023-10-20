import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '../utils/theme';
import {SIZES} from '../utils/size';

const Slideshow = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const colors = useTheme();

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
      flatListRef.current.scrollToIndex({animated: true, index: newIndex});
    }, 3000); // Adjust the interval as needed

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex, images.length]);

  return (
    <View
      style={{
        borderRadius: RFValue(10),
        backgroundColor: colors.accent,
        padding: RFValue(1),
      }}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Image
            source={item}
            style={{
              width: SIZES.width * 0.91,
              height: 200, // Adjust height and width as needed
              borderRadius: RFValue(10),
              objectFit: 'fill',
            }}
          />
        )}
        onMomentumScrollEnd={event => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
          setCurrentIndex(newIndex);
        }}
        ref={flatListRef}
      />
    </View>
  );
};

export default Slideshow;
