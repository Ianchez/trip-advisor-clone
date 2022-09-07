import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HorizontalPillList, ScreenTitle } from '../components/';
import { PlacesSection, DestinationsSection, SearchSection } from '../components/sections';

import screenStyles from '../styles/screen';

import { PLACES_INITIAL_STATE } from '../data/places';
import { IRecentSearch } from '../models/searchTypes';
import { Place } from '../models/dataTypes';

const SearchScreen = ({ navigation }) => {
  const [resentSearches, setRecentSearches] = useState<IRecentSearch[]>([
    { placeId: 8, searchString: 'New York City'},
    { placeId: null, searchString: 'Things to do in San Pedro de Atacama'},
    { placeId: 8, searchString: 'Restaurants in San Jose del Maipo'},
  ]);
  const [places, setPlaces] = useState<Place[]>(PLACES_INITIAL_STATE);
  const [searchSection, setSearchSection] = useState(false);

  const attractions = places.filter(place => place.type === 'attraction');
  const barsPubs = places.filter(place => place.type === 'bars&pubs');
  const getaways = places.filter(place => place.type === 'getaway');
  const destinations = places.filter(place => place.type === 'destination');

  const setSearchSectionActiveHandler = (active: boolean) => setSearchSection(active);

  const onPressItemHandler = (place: Place) => {
    navigation.navigate('PlaceDetail', { place });
  }

  return (
    <SafeAreaView style={screenStyles.container}>
      {!searchSection && 
        <ScreenTitle title='Search' style={styles.separation}/>
      }
      <SearchSection
        active={searchSection}
        setActive={setSearchSectionActiveHandler}
        places={places}
        resentSearches={resentSearches}
        onPressItemHandler={onPressItemHandler}
      />

      {!searchSection && <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          decelerationRate={0.3}
          style={styles.scrollContainer}
        >
          {Boolean(resentSearches.length) && <>
            <Text style={screenStyles.subSectionText}>Your recent searches</Text>
            <HorizontalPillList itemList={resentSearches.map(s => s.searchString)} pillStyle={styles.recentSearchPills}/>
          </>}

          <View style={styles.separation}/>
          <PlacesSection placesList={attractions} sectionTitle='Attractions nearby' onPressItem={onPressItemHandler}/>
          <View style={styles.doubleSeparation}/>
          <PlacesSection placesList={barsPubs} sectionTitle='Bars & Pubs nearby' onPressItem={onPressItemHandler}/>
          <View style={styles.doubleSeparation}/>
          <PlacesSection placesList={getaways} sectionTitle='Weekends getaway' onPressItem={onPressItemHandler}/>
          <View style={styles.doubleSeparation}/>
          <DestinationsSection destinationsList={destinations} sectionTitle='Destinations travelers love' />
        </ScrollView>
      </>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingBottom: 26,
  },
  separation: {
    marginBottom: 20,
  },
  doubleSeparation: {
    marginBottom: 40,
  },
  recentSearchPills: {
    height: 54,
    borderRadius: 28,
  },

}); 

export default SearchScreen;