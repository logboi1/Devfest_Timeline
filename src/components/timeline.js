import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RegularText from '../utils/regularText';
import {RFValue} from 'react-native-responsive-fontsize';
import {SIZES} from '../utils/size';
import BoldText from '../utils/boldText';
import {useTheme} from '../utils/theme';
import MediumText from '../utils/mediumText';

const Timeline = ({data}) => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const colors = useTheme();

  const handleMilestoneClick = index => {
    if (index === expandedMilestone) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(index);
    }
  };

  return (
    <View style={styles.timeline}>
      {data.map((milestone, i) => (
        <TouchableOpacity
          key={i}
          style={styles.milestone}
          onPress={() => handleMilestoneClick(i)}>
          <View
            style={[
              styles.indicator,
              milestone.passed ? styles.passedIndicator : null,
            ]}></View>

          <View
            style={[
              styles.verticalLine,
              {backgroundColor: colors.accent},
              expandedMilestone && styles.increaseVerticalLine,
            ]}></View>
          <View style={[styles.detail, {backgroundColor: colors.accent}]}>
            <View style={styles.header}>
              <BoldText customStyle={styles.title}>{milestone.title}</BoldText>
              <RegularText customStyle={styles.date}>
                {milestone.time}
              </RegularText>
            </View>
            {expandedMilestone === i && (
              <>
                <MediumText customStyle={styles.alaaye}>
                  {milestone.description}
                </MediumText>
                <BoldText customStyle={styles.title}>Speaker(s)</BoldText>
                <RegularText>{milestone.speakers}</RegularText>
              </>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  timeline: {
    flexDirection: 'column',
    marginTop: RFValue(30),
  },
  milestone: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  indicator: {
    width: RFValue(20),
    height: RFValue(20),
    borderRadius: RFValue(30),
    backgroundColor: 'transparent',
    marginRight: RFValue(20),
    borderWidth: RFValue(3),
    borderColor: '#BC6C25',
  },
  passedIndicator: {
    backgroundColor: '#BC6C25', // Change to your desired color for passed milestones
  },
  date: {
    fontSize: 15,
  },
  title: {
    fontSize: 18,
  },
  description: {
    flex: 1,
    fontSize: 14,
  },
  alaaye: {
    textAlign: 'justify',
    marginBottom: RFValue(12),
  },
  detail: {
    width: SIZES.width * 0.8,
    padding: RFValue(15),
    borderRadius: RFValue(10),
    display: 'flex',
    marginTop: RFValue(10),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFValue(10),
  },
  verticalLine: {
    width: RFValue(3),
    backgroundColor: 'red',
    height: RFValue(50),
    position: 'absolute',
    left: RFValue(8),
    top: RFValue(25),
    borderRadius: RFValue(10),
  },
  increaseVerticalLine: {
    // height: RFValue(0),
  },
});

export default Timeline;
