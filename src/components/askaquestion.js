import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import CSelectList from './dropdown';
import RegularText from '../utils/regularText';
import CButton from './button';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '../utils/theme';
import CustomAlert from './customAlert';
import firestore from '@react-native-firebase/firestore';

const AskQuestionPage = ({timelineData, navigation}) => {
  const [selectedTitle, setSelectedTitle] = useState(timelineData[0].title);
  const [alertVisible, setAlertVisible] = useState(false);
  const [nickname, setNickname] = useState('');
  const [question, setQuestion] = useState('');

  const colors = useTheme();

  const questionsCollection = firestore().collection('Questions');

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
      // navigation.goBack();
    }, 3000);
  };

  const handleTitleSelect = option => {
    setSelectedTitle(option);
  };

  const handleSubmission = async () => {
    try {
      // Gather the submitted data
      const submissionData = {
        title: selectedTitle,
        nickname,
        question,
      };
      console.log('Submitted Data:', submissionData);

      firestore()
        .collection('Questions')
        .add(submissionData)
        .then(() => {
          console.log('User added!');
        });

      showAlert();
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('Questions')
      .onSnapshot(querySnapshot => {
        const questions = [];

        querySnapshot.forEach(documentSnapshot => {
          // Extract the data from each document
          const data = documentSnapshot.data();
          questions.push(data);
        });

        // Now, you have an array of questions
        console.log('Questions data: ', questions);
      });

    // Stop listening for updates when the component unmounts
    return () => subscriber();
  }, []);

  return (
    <View>
      <RegularText>Select a Title</RegularText>
      <CSelectList
        options={timelineData.map(event => ({label: event.title}))}
        onSelect={handleTitleSelect}
        inputStyles={{fontSize: 16}}
      />

      <RegularText>Enter Your Nickname</RegularText>
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text,
            backgroundColor: 'transparent',
            borderColor: colors.accent,
          },
        ]}
        placeholder="Nickname"
        placeholderTextColor={colors.placeholder}
        value={nickname}
        onChangeText={text => setNickname(text)}
      />

      <RegularText>Enter Your Question</RegularText>
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text,
            backgroundColor: 'transparent',
            borderColor: colors.accent,
            height: RFValue(100),
            textAlignVertical: 'top',
          },
        ]}
        placeholderTextColor={colors.placeholder}
        placeholder="Question"
        value={question}
        onChangeText={text => setQuestion(text)}
        multiline
      />

      <CButton title="Submit Question" onPress={handleSubmission} />

      <CustomAlert
        visible={alertVisible}
        title={'Submitted'}
        btntitle={'Dismiss'}
        type="success"
        message="Your Question has been Submitted"
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Regular',
    height: RFValue(50),
    borderWidth: RFValue(1),
    borderRadius: RFValue(8),
    paddingHorizontal: RFValue(8),
    marginBottom: RFValue(20),
  },
});

export default AskQuestionPage;
