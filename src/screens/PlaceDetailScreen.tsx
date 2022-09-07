import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';

import { Place } from '../models/dataTypes';
import { PillButton, RatingCircles, ScreenTitle } from '../components';
import WriteAReviewScreen from './WriteAReviewScreen';

const PlaceDetailScreen = ({ route, navigation }) => {
  const place: Place | undefined = route?.params?.place;
  if (!place) { return }

  const onPressRatingHandler = () => navigation.navigate('ReviewsList', { placeId: place.id });
  const onPressWriteAReviewHandler = () => navigation.navigate('WriteAReview', { place });

  return (
    <SafeAreaView>
      <Image source={{ uri: place.imgURI }} style={{ width: '100%', height: 280, backgroundColor: 'black' }}/>
      <View style={styles.container}>
        <ScreenTitle title={place.title} />

        <View style={styles.placeDetailContainer}>
          <View style={styles.apartRow}>
            {place.avgRating &&
              <TouchableOpacity style={styles.ratingContainer} onPress={onPressRatingHandler}>
                <View style={styles.ratingContainer}>
                  <RatingCircles rating={place.avgRating} circleSize={20} />
                  <Text>{`${place.reviewsCount} reviews`}</Text>
                </View>
              </TouchableOpacity>
            }
            {place.distance &&
              <Text style={styles.distanceText}>{`${place.distance} km`}</Text>
            }
          </View>
        </View>

        {place.location &&
          <Text>{`#${Math.round(Math.random() * 500)} of 512 things to do in ${place.location}`}</Text>
        }
        {place.categories &&
          <Text>{place.categories.join(' 🞄 ')}</Text>
        }

        <View style={styles.linksContainer}>
          <View style={{ width: 90 }}>
            <TouchableWithoutFeedback onPress={() => console.log('Go to website!')}>
              <Text style={styles.links}>Visit website</Text>
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback style={{ width: 100 }} onPress={onPressWriteAReviewHandler}>
            <Text style={styles.links}>Write a review</Text>
          </TouchableWithoutFeedback>
        </View>

      </View>
      <View style={styles.experienceContainer}>
        <Text style={{ fontSize: 12, fontWeight: '600', marginBottom: 6, }}>Tours & experiences</Text>
        <Text style={{ fontSize: 10,marginBottom: 10 }}>Explore different ways to experience this place.</Text>
        <PillButton text={'See tour options'} pillStyle={{ backgroundColor: '#e6b930'}}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  placeDetailContainer: {
    paddingTop: 10,
    paddingBottom: 6,
  },
  apartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    position: 'relative',
    top: 3,
  },
  linksContainer: {
    flexDirection: 'row',
    marginVertical: 20
  },
  links: {
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  experienceContainer: {
    marginTop: 20,
    paddingVertical: 40,
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
});

export default PlaceDetailScreen