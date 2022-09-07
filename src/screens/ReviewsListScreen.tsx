import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputField, PillButton, RatingCircles } from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { REVIEWS_INITIAL_STATE } from '../data/reviews';
import { IReview } from '../models/dataTypes';
import screenStyles from '../styles/screen';

const ReviewsListScreen = ({ route }) => {
  const { placeId } = route.params;
  if (!placeId) return;

  const [reviews, setReviews] = useState<IReview[]>(REVIEWS_INITIAL_STATE);

  const placeReviews = reviews.filter(review => review.placeId === placeId);
  const rawRating = placeReviews.map(review => review.rating).reduce((sum, rating) => sum + rating, 0) / placeReviews.length;
  const rating = Math.round(rawRating * 100) / 100

  return (
    <SafeAreaView style={screenStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        decelerationRate={0.3}
      >
        <Text style={styles.screenTitle}>Reviews</Text>
        <View style={styles.doubleSeparation}/>

        <View style={styles.ratingsContainer}>
          <Text style={styles.rating}>{rating}</Text>
          <RatingCircles rating={rating} circleSize={14}/>
          <Text style={styles.reviewsCount}>{`${placeReviews.length} reviews`}</Text>
        </View>
        <View style={styles.separation}/>

        <View style={styles.ratingsDetail}>
          <View style={styles.ratingsDetailRow}>
            <Text style={{ flex: 1 }}>Excellent</Text>
            <View style={{ flex: 3, ...styles.row }}>
              <View style={[ styles.ratingBar ]}/>
              <Text>2</Text>
            </View>
          </View>
          <View style={styles.ratingsDetailRow}>
            <Text style={{ flex: 1 }}>Very good</Text>
            <View style={{ flex: 3, ...styles.row }}>
              <View style={[ styles.ratingBar ]}/>
              <Text>2</Text>
            </View>
          </View>
          <View style={styles.ratingsDetailRow}>
            <Text style={{ flex: 1 }}>Average</Text>
            <View style={{ flex: 3, ...styles.row }}>
              <View style={[ styles.ratingBar ]}/>
              <Text>2</Text>
            </View>
          </View>
          <View style={styles.ratingsDetailRow}>
            <Text style={{ flex: 1 }}>Poor</Text>
            <View style={{ flex: 3, ...styles.row }}>
              <View style={[ styles.ratingBar ]}/>
              <Text>2</Text>
            </View>
          </View>
          <View style={styles.ratingsDetailRow}>
            <Text style={{ flex: 1 }}>Terrible</Text>
            <View style={{ flex: 3, ...styles.row }}>
              <View style={[ styles.ratingBar ]}/>
              <Text>2</Text>
            </View>
          </View>
        </View>

        <View style={styles.separation}/>
        <View style={[ styles.row, styles.filtersContainer ]}>
          <PillButton text={'Filters'} pillStyle={{ height: 36, borderColor: 'lightgray' }}/>
          <PillButton text={'English'} pillStyle={{ height: 36, borderColor: 'black' }}/>
        </View>

        <View style={styles.doubleSeparation}/>
        <InputField placeholder="Search reviews..." value={''} icon="search"/>

        {placeReviews.map(review =>
          <View key={review.id} style={{ paddingVertical: 20, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}>
            <View style={styles.reviewHeaderRow}>
              <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: 'black', marginRight: 10 }} />
              <View>
                <Text style={{ fontWeight: '700',fontSize: 12 }}>{review.author}</Text>
                <Text style={{ fontSize: 8 }}>{'Santiago, Chile'}</Text>
                <Text style={{ fontSize: 8 }}>{`${Math.ceil(Math.random() * 300)} contributions`}</Text>
              </View>
            </View>

            <RatingCircles rating={review.rating} circleSize={14} />
            <Text style={{ fontWeight: '700' }}>{review.author}</Text>
            <Text style={{ }}>{review.reviewContent}</Text>

            <View style={styles.separation}/>
            <View style={styles.reviewFooter}>
              <Text style={{ fontSize: 10 }}>{`Written ${review.date}`}</Text>
              <View style={styles.likesRow}>
                <Icon name={'thumb-up'} size={14}/>
                <Text style={{ marginLeft: 6 }}>{review.likes}</Text>
              </View>
            </View>
          </View>
        )}

      </ScrollView>
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
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  rating: {
    fontSize: 24,
    fontWeight: '900',
  },
  ratingsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewsCount: {
    fontSize: 12,
  },
  ratingsDetail: {

  },
  row: {
    flexDirection: 'row',
  },
  reviewHeaderRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingsDetailRow: {
    flexDirection: 'row',
    height: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ratingBar: {
    backgroundColor: 'green',
    height: 12,
    borderRadius: 6,
    width: '50%',
    marginRight: 6,
    position: 'relative',
    top: 4,
  },
  filtersContainer: {
    paddingTop: 20,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}); 

export default ReviewsListScreen;