import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HorizontalPillList, PillButton, ScreenTitle } from '../components/';

import screenStyles from '../styles/screen';

const ReviewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate={0.3}
        style={styles.scrollContainer}
      >
        <View style={styles.paddingHorizontal}>
          <ScreenTitle title='Review'/>
          <View style={styles.separation}/>

          <Text style={styles.noReviewsTitle}>No reviews yet</Text>
          <Text>You have not written any reviews yet, get started!</Text>
          <HorizontalPillList
            pillStyle={{ borderColor: 'black' }}
            itemList={[
              'Write a review',
              'Upload a photo'
            ]}
          />
        </View>

        <View style={styles.separation}/>
        <View style={[ styles.writeUsAReviewContainer, styles.paddingHorizontal ]}>
          <View style={styles.writeUsAReview}>
            <Text style={[ styles.weWantText, styles.white ]}>We want you to write us a review</Text>
            <Text style={[ styles.white ]}>Because who else would we turn to travel advice?</Text>
            <View style={styles.separation}/>
            <PillButton text='What to know' pillStyle={styles.whatToKnowButton}/>
          </View>
        </View>

        <View style={styles.doubleSeparation}/>
        <View style={[ styles.paddingHorizontal, styles.addAPlaceSection ]}>
          <Text style={{ fontWeight: '500' }}>Is Tripadvisor missing a place?</Text>
          <Text>Tell us about it so we can improve what we show</Text>
          <View style={styles.separation}/>
          <PillButton text='Add a place' pillStyle={styles.addAPlaceButton}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  separation: {
    marginBottom: 20,
  },
  doubleSeparation: {
    marginBottom: 40,
  },
  noReviewsTitle: {
    ...screenStyles.subSectionText,
    marginBottom: 6,
  },
  writeUsAReviewContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: Dimensions.get('window').width,
    paddingVertical: 26,
  },
  writeUsAReview: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  weWantText: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
    lineHeight: 38,
  },
  addAPlaceSection: {
    alignItems: 'center',
  },
  whatToKnowButton: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 130,
  },
  addAPlaceButton: {
    borderColor: 'black',
    width: '100%',
    alignItems: 'center'
  },
  white: {
    color: 'white'
  },
}); 

export default ReviewScreen;