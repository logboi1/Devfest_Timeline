import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import RegularText from '../utils/regularText';
import CButton from '../components/button';
import {RFValue} from 'react-native-responsive-fontsize';
import MainLayout from '../components/layout';
import TopBar from '../components/topbar';
import {useTheme} from '../utils/theme';
import BoldText from '../utils/boldText';
import Clipboard from '@react-native-clipboard/clipboard';

const SocialMedia = ({navigation}) => {
  const [hashtags, setHashtags] = useState([
    {label: 'Devfest', selected: false},
    {label: 'DSC', selected: false},
    {label: 'Womenintech', selected: false},
    {label: 'inamaste', selected: false},
    {label: 'DevfestAdo23', selected: false},
    {label: 'DevFestEkiti', selected: false},
    {label: 'Propel', selected: false},
    {label: 'KweekTransfer', selected: false},
    {label: 'SheCodeAfrica', selected: false},
  ]);
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const colors = useTheme();

  const handleHashtagClick = index => {
    const updatedHashtags = [...hashtags];
    updatedHashtags[index].selected = !updatedHashtags[index].selected;
    setHashtags(updatedHashtags);

    if (updatedHashtags[index].selected) {
      setSelectedHashtags(prevSelected => [
        ...prevSelected,
        updatedHashtags[index],
      ]);
    } else {
      setSelectedHashtags(prevSelected =>
        prevSelected.filter(tag => tag.label !== updatedHashtags[index].label),
      );
    }
  };

  return (
    <MainLayout
      topBar={
        <TopBar
          navigation={navigation}
          showBack
          title={'Social Media HashTags'}
        />
      }>
      <ScrollView>
        <View style={styles.tagWrapper}>
          <View style={styles.tagView}>
            {hashtags.map((hashtag, i) => (
              <TouchableOpacity key={i} onPress={() => handleHashtagClick(i)}>
                <RegularText
                  customStyle={[
                    styles.tag,
                    hashtag.selected
                      ? {backgroundColor: colors.accent}
                      : {backgroundColor: '#CCC'},
                  ]}>
                  #{hashtag.label}
                </RegularText>
              </TouchableOpacity>
            ))}
          </View>
          <CButton
            title="Copy Selected Hashtags"
            onPress={() => {
              const selectedLabels = selectedHashtags
                .map(tag => `#${tag.label}`)
                .join(' ');

              {
                selectedLabels
                  ? Clipboard.setString(selectedLabels)
                  : console.log('No selected hashtags to copy.');
              }
            }}
          />
          <BoldText customStyle={styles.selected}>Selected Hashtags:</BoldText>
          <View style={styles.tagView}>
            {selectedHashtags.map((tag, index) => (
              <RegularText customStyle={{marginLeft: RFValue(4)}} key={index}>
                #{tag.label}
              </RegularText>
            ))}
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  tagView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: RFValue(20),
  },
  tag: {
    margin: RFValue(5),
    padding: RFValue(5),
    paddingHorizontal: RFValue(10),
    borderRadius: RFValue(8),
    marginBottom: RFValue(10),
  },
  selected: {
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
    fontSize: RFValue(12),
  },
});

export default SocialMedia;
