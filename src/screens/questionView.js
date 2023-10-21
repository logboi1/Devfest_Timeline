import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MainLayout from '../components/layout';
import TopBar from '../components/topbar';
import BoldText from '../utils/boldText';
import {useTheme} from '../utils/theme';
import MediumText from '../utils/mediumText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RFValue} from 'react-native-responsive-fontsize';

const ViewQuestions = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const colors = useTheme();

  // Load answered questions from AsyncStorage on component mount
  useEffect(() => {
    const loadAnsweredQuestions = async () => {
      try {
        const answeredQuestionsData = await AsyncStorage.getItem(
          'answeredQuestions',
        );
        if (answeredQuestionsData !== null) {
          setAnsweredQuestions(JSON.parse(answeredQuestionsData));
        }
      } catch (error) {
        console.error('Error loading answered questions:', error);
      }
    };

    loadAnsweredQuestions();
  }, []);

  const markAsAnswered = questionId => {
    // Add the question ID to the list of answered questions
    const updatedAnsweredQuestions = [...answeredQuestions, questionId];
    setAnsweredQuestions(updatedAnsweredQuestions);

    // Save the updated list to AsyncStorage
    AsyncStorage.setItem(
      'answeredQuestions',
      JSON.stringify(updatedAnsweredQuestions),
    );
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('Questions')
      .onSnapshot(querySnapshot => {
        const questionsData = [];

        querySnapshot.forEach(documentSnapshot => {
          const questionId = documentSnapshot.id;
          const data = documentSnapshot.data();
          const isAnswered = answeredQuestions.includes(questionId); // Check if the question is answered

          questionsData.push({
            id: questionId,
            isAnswered,
            ...data,
          });
        });

        setQuestions(questionsData);
      });

    return () => subscriber();
  }, [answeredQuestions]);

  return (
    <MainLayout
      topBar={<TopBar showBack navigation={navigation} title={'Questions'} />}>
      <BoldText style={styles.title}>Questions</BoldText>
      <FlatList
        data={questions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.questionContainer,
              {backgroundColor: colors.accent},
            ]}>
            <BoldText customStyle={styles.questionText}>
              {item.question}
            </BoldText>
            <MediumText
              customColor={colors.background}
              customStyle={styles.questionerText}>
              Question by: {item.nickname}
            </MediumText>
            <MediumText customStyle={styles.questionerText}>
              Section: {item.title}
            </MediumText>
            <TouchableOpacity onPress={() => markAsAnswered(item.id)}>
              {item.isAnswered ? (
                <MediumText
                  customColor={colors.background}
                  customStyle={styles.answeredText}>
                  Answered ✔
                </MediumText>
              ) : (
                <MediumText
                  customColor={'#800000'}
                  customStyle={styles.markAsAnsweredText}>
                  Mark as Answered
                </MediumText>
              )}
            </TouchableOpacity>
          </View>
        )}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    fontSize: 14,
  },
  questionerText: {
    fontSize: 12,
  },
  markAsAnsweredText: {
    marginTop: RFValue(5),
    textAlign: 'right',
    fontSize: 10,
  },
  answeredText: {
    fontSize: 10,
    marginTop: RFValue(5),
    textAlign: 'right',
  },
});

export default ViewQuestions;
