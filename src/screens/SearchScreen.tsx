import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalPillList from '../components/HorizontalPillList';
import InputField from '../components/InputField';
import ScreenTitle from '../components/ScreenTitle';
import PlacesSection from '../components/sections/PlacesSection';
import DestinationsSection from '../components/sections/DestinationsSection';
import screenStyles from '../styles/screen';

const PLACES_INITIAL_STATE = [
  {
    title: 'Plaza Nunoa',
    imgURI: 'https://reactjs.org/logo-og.png',
    avgRating: 4.3,
    reviewsCount: 404,
    distance: 0.2,
    categories: [
      'Points of Interest & Landmarks',
      'Parks',
    ],
  },
  {
    title: 'Portal Nunoa',
    imgURI: 'https://reactjs.org/logo-og.png',
    avgRating: 4.1,
    reviewsCount: 63,
    distance: 0.7,
    categories: [
      'Shopping Malls'
    ],
  },
  {
    title: 'Traveling Spoon',
    imgURI: 'https://reactjs.org/logo-og.png',
    avgRating: 4.9,
    reviewsCount: 404,
    distance: 0.8,
    categories: [
      'Cooking Classes',
      'Food Tours',
    ],
  },
];

const SearchScreen = () => {
  const [resentSearches, setRecentSearches] = useState<string[]>([
    'New York City',
    'Things to do in San Pedro de Atacama',
    'Restaurants in San Jose del Maipo',
  ]);
  const [places, setPlaces] = useState<any[]>(PLACES_INITIAL_STATE);

  return (
    <SafeAreaView style={screenStyles.container}>
      <ScreenTitle title='Search' style={styles.separation}/>
      <InputField placeholder='Where to?' icon={'search'} />
      <View style={styles.separation}/>

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
        <PlacesSection placesList={places} sectionTitle='Attractions nearby'/>
        <View style={styles.doubleSeparation}/>
        <PlacesSection placesList={places} sectionTitle='Bars & Pubs nearby'/>
        <View style={styles.doubleSeparation}/>
        <PlacesSection placesList={places} sectionTitle='Weekends getaway'/>
        <View style={styles.doubleSeparation}/>
        <DestinationsSection destinationsList={places} sectionTitle='Destinations travelers love' />
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