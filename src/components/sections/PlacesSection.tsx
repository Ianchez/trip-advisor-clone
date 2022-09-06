import { Image, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { iconsDictionary } from './../../utils/icons';
import screenStyles from '../../styles/screen';
import RatingCircles from '../RatingCircles';

type Props = {
  placesList: any[],
  sectionTitle: string,
  // containerStyle?: StyleProp<ViewStyle>;
  // pillStyle?: StyleProp<ViewStyle>;
  // textStyle?: StyleProp<TextStyle>;
}

const PlacesSection: React.FC<Props> = ({ placesList, sectionTitle }) => {
  return (
    <>
      <View style={styles.subSectionHeader}>
        <Text style={screenStyles.subSectionText}>{sectionTitle}</Text>
        <Text style={styles.subSectionSeeAllText}>See all</Text>
      </View>
      {placesList.map((place, index) =>
        <>
          <TouchableOpacity style={styles.subSectionItem}>
            <View style={styles.subSectionItemImg}>
              <Image
                source={{ uri: place.imgURI }}
                style={styles.subSectionItemImg}
              />
              <TouchableOpacity style={styles.favPlaceButton}>
                <Icon
                  name={iconsDictionary['Plan']}
                  size={15}
                  color={'black'}
                  style={{ fontWeight: '900' }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.subSectionItemDetail}>
              <Text style={styles.subSectionItemDetailTitle}>{place.title}</Text>
              <View style={{ flexDirection: 'row'}}>
                <RatingCircles rating={place.avgRating} circleSize={12}/>
                <View style={styles.subSectionItemDetailRatingAndDistance}>
                  <Text style={styles.ratingNumber}>{place.reviewsCount}</Text>
                  <Text style={styles.ratingNumber}>{`${place.distance} km`}</Text>
                </View>
              </View>
              <Text style={styles.subSectionItemDetailClasification}>{place.categories.join(' | ')}</Text>
            </View>
          </TouchableOpacity>
          {index !== (placesList.length - 1) && // Avoid space at the end
            <View style={styles.spaceBetween}/>
          }
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  subSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subSectionSeeAllText: {
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '500',
    position: 'relative',
    top: 5,
  },
  subSectionItem: {
    flexDirection: 'row',
  },
  subSectionItemImg: {
    height: 100,
    width: 100,
    backgroundColor: 'gray',
  },
  subSectionItemDetail: {
    flex: 1,
    width: '100%',
    paddingLeft: 16,
  },
  subSectionItemDetailTitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  subSectionItemDetailRatingAndDistance: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingNumber: {
    fontSize: 10, 
  },
  subSectionItemDetailClasification: {
    fontSize: 11,
    fontWeight: '400',
  },
  favPlaceButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    right: 6,
    top: 6,
  },
  spaceBetween: {
    height: 12,
  }
});

export default PlacesSection;
