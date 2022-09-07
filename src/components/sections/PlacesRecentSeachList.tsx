import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Place } from '../../models/dataTypes';
import { IRecentSearch } from '../../models/searchTypes';


interface Props {
  resentSearches: IRecentSearch[],
  places: Place[];
}

const PlacesRecentSearchList: React.FC<Props> = ({ resentSearches, places }) => {
  return (
    <View>
      <View style={styles.doubleSeparation}/>
      <Text style={styles.recentSubTitle}>RECENT</Text>
      {resentSearches.reverse().map((recent, index) => {
        const place = places.find(place => place.id === recent.placeId);
        return (
          <TouchableOpacity key={`recent-search-list-item-${index}`} style={styles.recentListItem}>
            <Image source={{ uri: place?.imgURI || '' }} style={styles.recentImage} />
            <View>
              <Text>{recent.searchString}</Text>
              {place?.location &&
                <Text style={styles.placeLocation}>{place.location}</Text>
              }
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  doubleSeparation: {
    marginBottom: 40,
  },
  recentSubTitle: { fontSize: 11, fontWeight: '500', marginBottom: 20 },
  recentListItem: { flexDirection: 'row', height: 60, borderTopWidth: 1, borderTopColor: 'lightgray', paddingVertical: 10 },
  recentImage: { height: 40, width: 40, backgroundColor: 'black', marginRight: 16 },
  placeLocation: {
    fontSize: 12,
  }
});

export default PlacesRecentSearchList;