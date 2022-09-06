import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HorizontalPillList, InputField, ScreenTitle } from '../components/';
import { PlacesSection, DestinationsSection, PlacesRecentSearchList, PlacesSearchResultList } from '../components/sections';

import Icon from 'react-native-vector-icons/MaterialIcons';

import screenStyles from '../styles/screen';

import { PLACES_INITIAL_STATE } from '../data/places';
import { IRecentSearch } from '../models/searchTypes';
import { Place } from '../models/dataTypes';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [resentSearches, setRecentSearches] = useState<IRecentSearch[]>([
    // { placeId: 8, searchString: 'New York City'},
    // { placeId: null, searchString: 'Things to do in San Pedro de Atacama'},
    // { placeId: 8, searchString: 'Restaurants in San Jose del Maipo'},
  ]);
  const [places, setPlaces] = useState<Place[]>(PLACES_INITIAL_STATE);
  const [searchSection, setSearchSection] = useState(false);

  const attractions = places.filter(place => place.type === 'attraction');
  const barsPubs = places.filter(place => place.type === 'bars&pubs');
  const getaways = places.filter(place => place.type === 'getaway');
  const destinations = places.filter(place => place.type === 'destination');

  const onChangeSearchHandler = (value: string) => setSearchValue(value);
  const onFocusSearchHandler = () => setSearchSection(true);

  return (
    <SafeAreaView style={screenStyles.container}>
      {!searchSection && 
        <ScreenTitle title='Search' style={styles.separation}/>
      }
      <View style={[ styles.searchHeader, searchSection && styles.borderBottomGray ]}>
        {searchSection &&
          <TouchableOpacity style={styles.seachHeaderBack} onPress={() => setSearchSection(false)}>
            <Icon name={'chevron-left'} size={24} color="black" />
          </TouchableOpacity>
        }
        <View style={{ flex: 10 }}>
          <InputField
            placeholder='Where to?'
            icon={'search'}
            value={searchValue}
            onChange={onChangeSearchHandler}
            onFocus={onFocusSearchHandler}
          />
        </View>
      </View>

      {searchSection && !searchValue &&
        <PlacesRecentSearchList resentSearches={resentSearches} places={places}/>
      }
      {searchSection && searchValue &&
        <PlacesSearchResultList placesList={places} searchValue={searchValue} />
      }

      {!searchSection && <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          decelerationRate={0.3}
          style={styles.scrollContainer}
        >
          {Boolean(resentSearches.length) && <>
            <Text style={screenStyles.subSectionText}>Your recent searches</Text>,
            <HorizontalPillList itemList={resentSearches.map(s => s.searchString)} pillStyle={styles.recentSearchPills}/>
          </>}

          <View style={styles.separation}/>
          <PlacesSection placesList={attractions} sectionTitle='Attractions nearby'/>
          <View style={styles.doubleSeparation}/>
          <PlacesSection placesList={barsPubs} sectionTitle='Bars & Pubs nearby'/>
          <View style={styles.doubleSeparation}/>
          <PlacesSection placesList={getaways} sectionTitle='Weekends getaway'/>
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
  searchHeader: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 16,
    alignItems: 'center',
  },
  borderBottomGray: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  seachHeaderBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  }
}); 

export default SearchScreen;