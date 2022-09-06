import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Place } from '../../models/dataTypes';

interface Props {
  placesList: Place[];
  searchValue: string;
};

const PlacesSearchResultList: React.FC<Props> = ({ placesList, searchValue }) => {
  const filteredList =
    placesList.filter(place =>
      place.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      place.location?.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      place.categories?.some(category => category.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      decelerationRate={0.3}
      style={styles.scrollContainer}
    >
      {filteredList.map(place => 
        <TouchableOpacity key={`search-result-list-item-${place.id}`} style={styles.resultItem}>
          <Image
            source={{ uri: place.imgURI }}
            style={[ styles.resultImage, place.imgURI ? styles.blackBackground : {} ]}
          />
          <View>
            <Text>{place.title}</Text>
            {place.location &&
              <Text style={styles.placeLocation}>{place.location}</Text>
            }
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  resultItem: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingVertical: 10
  },
  resultImage: {
    height: 40,
    width: 40,
    marginRight: 16,
  },
  blackBackground: {
    backgroundColor: 'black',
  },
  placeLocation: {
    fontSize: 12,
  }
});

export default PlacesSearchResultList;
