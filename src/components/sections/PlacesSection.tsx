import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { iconsDictionary } from './../../utils/icons';
import screenStyles from '../../styles/screen';
import RatingCircles from '../RatingCircles';

type Props = {
  placesList: any[],
  sectionTitle: string
}

const PlacesSection: React.FC<Props> = ({ placesList, sectionTitle }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={screenStyles.subSectionText}>{sectionTitle}</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      {placesList.map((place, index) =>
        <>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemImg}>
              <Image
                source={{ uri: place.imgURI }}
                style={styles.itemImg}
              />
              <TouchableOpacity style={styles.favPlaceButton}>
                <Icon
                  name={iconsDictionary['Plan']}
                  size={18}
                  color={'black'}
                  style={{ fontWeight: '900' }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.itemDetail}>
              <Text style={styles.itemDetailTitle}>{place.title}</Text>
              <View style={{ flexDirection: 'row'}}>
                {place.avgRating &&
                  <RatingCircles rating={place.avgRating} circleSize={14}/>
                }
                <View style={styles.itemDetailRatingAndDistance}>
                  <Text style={styles.ratingNumber}>{place.reviewsCount}</Text>
                  {place.distance && 
                    <Text style={styles.ratingNumber}>{`${place.distance} km`}</Text>
                  }
                </View>
              </View>
              {place.categories && 
                <Text style={styles.itemDetailClassification}>{place.categories.join(' | ')}</Text>
              }
              {place.location && 
                <Text style={styles.itemDetailLocation}>{place.location}</Text>
              }
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  seeAllText: {
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '500',
    position: 'relative',
    top: 5,
  },
  item: {
    flexDirection: 'row',
  },
  itemImg: {
    height: 120,
    width: 120,
    backgroundColor: 'gray',
  },
  itemDetail: {
    flex: 1,
    width: '100%',
    paddingLeft: 16,
  },
  itemDetailTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemDetailRatingAndDistance: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingNumber: {
    fontSize: 11, 
  },
  itemDetailClassification: {
    fontSize: 12,
    fontWeight: '400',
  },
  itemDetailLocation: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '400',
  },
  favPlaceButton: {
    height: 28,
    width: 28,
    borderRadius: 14,
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
