import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HorizontalPillList, InputField, ScreenTitle } from '../components/';
import { PlacesSection, DestinationsSection } from '../components/sections';

import screenStyles from '../styles/screen';

import { PLACES_INITIAL_STATE } from '../data/places';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [resentSearches, setRecentSearches] = useState<string[]>([
    'New York City',
    'Things to do in San Pedro de Atacama',
    'Restaurants in San Jose del Maipo',
  ]);
  const [places, setPlaces] = useState<any[]>(PLACES_INITIAL_STATE);

  const attractions = places.filter(place => place.type === 'attraction');
  const barsPubs = places.filter(place => place.type === 'bars&pubs');
  const getaways = places.filter(place => place.type === 'getaway');

  const onChangeSearchHandler = (value: string) => setSearchValue(value);

  return (
    <SafeAreaView style={screenStyles.container}>
      <ScreenTitle title='Search' style={styles.separation}/>
      <InputField placeholder='Where to?' icon={'search'} value={searchValue} onChange={onChangeSearchHandler}/>

      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate={0.3}
        style={styles.scrollContainer}
      >
        {Boolean(resentSearches.length) && [
          <Text style={screenStyles.subSectionText}>Your recent searches</Text>,
          <HorizontalPillList itemList={resentSearches}/>
        ]}

        <View style={styles.separation}/>
        <PlacesSection placesList={attractions} sectionTitle='Attractions nearby'/>
        <View style={styles.doubleSeparation}/>
        <PlacesSection placesList={barsPubs} sectionTitle='Bars & Pubs nearby'/>
        <View style={styles.doubleSeparation}/>
        <PlacesSection placesList={getaways} sectionTitle='Weekends getaway'/>
        <View style={styles.doubleSeparation}/>
        <DestinationsSection destinationsList={getaways} sectionTitle='Destinations travelers love' />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingVertical: 15,
  },
  separation: {
    marginBottom: 20,
  },
  doubleSeparation: {
    marginBottom: 40,
  },
}); 

export default SearchScreen;