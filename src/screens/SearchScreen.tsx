import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HorizontalPillList from '../components/HorizontalPillList';
import InputField from '../components/InputField';
import ScreenTitle from '../components/ScreenTitle';
import PlacesSection from '../components/sections/PlacesSection';
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
    <View style={screenStyles.container}>
      <ScreenTitle title='Search' style={styles.separation}/>
      <InputField placeholder='Where to?' icon={'search'} style={styles.separation}/>

      {Boolean(resentSearches.length) && [
        <Text style={screenStyles.subSectionText}>Your recent searches</Text>,
        <HorizontalPillList itemList={resentSearches}/>
      ]}

      <View style={styles.separation}/>

      <PlacesSection placesList={places} sectionTitle="Attractions nearby"/>
    </View>
  );
};

const styles = StyleSheet.create({
  separation: {
    marginBottom: 20
  },
}); 

export default SearchScreen;