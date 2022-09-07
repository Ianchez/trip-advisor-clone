import React, { useState } from 'react';
import { Text, TextInput, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputField, PillButton, RatingCircles } from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { REVIEWS_INITIAL_STATE } from '../data/reviews';
import { IReview, Place } from '../models/dataTypes';
import screenStyles from '../styles/screen';

const WriteAReviewScreen = ({ route, navigation }) => {
  const place: Place = route.params.place;

  const [rating, setRating] = useState<string>('');
  const [reviewContent, setReviewContent] = useState<string>('');
  const [reviewTitle, setReviewTitle] = useState<string>('');

  const onChangeRatingHandler = (rating: string) => setRating(rating);
  const onChangeReviewContentHandler = (reviewContent: string) => setReviewContent(reviewContent);
  const onChangeReviewTitleHandler = (reviewTitle: string) => setReviewTitle(reviewTitle);

  const onPressDoneHandler = () => {
    console.log('Saving review!')
    navigation.goBack();
  }

  return (
    <SafeAreaView style={screenStyles.container}>
      <View>
        {place && <>
          <Text>{place.title}</Text>
          <Text>{place.location}</Text>
          <View style={styles.doubleSeparation}/>
        </>}

        <Text>How would you rate your experience?</Text>
        <TextInput
          placeholder={'Rating'}
          placeholderTextColor={'lightgray'}
          value={rating}
          onChangeText={onChangeRatingHandler}
        >

        </TextInput>
        <View style={styles.doubleSeparation}/>

        <Text>Write your review</Text>
        <TextInput
          multiline
          numberOfLines={10}
          placeholder={`You rated your experiece ${rating} out of 5. Tell us more.`}
          placeholderTextColor={'lightgray'}
          onChangeText={onChangeReviewContentHandler}
          value={reviewContent}
        />
        <View style={styles.doubleSeparation}/>

        <Text>Title this review</Text>
        <TextInput
          multiline
          numberOfLines={2}
          placeholder={'Summarize your visit in a few words'}
          placeholderTextColor={'lightgray'}
          onChangeText={onChangeReviewTitleHandler}
          value={reviewTitle}
        />
      </View>

      <View style={styles.doubleSeparation}/>
      <PillButton text='Done' onPress={onPressDoneHandler} pillStyle={{ borderColor: 'black', width: 100, alignSelf: 'flex-end' }}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  separation: {
    marginBottom: 20,
  },
  doubleSeparation: {
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
  },
}); 

export default WriteAReviewScreen;