import { useState } from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PlacesRecentSearchList, PlacesSearchResultList } from './index';
import { InputField } from '../index';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Place } from '../../models/dataTypes';
import { IRecentSearch } from '../../models/searchTypes';

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
  places: Place[];
  resentSearches: IRecentSearch[];
}

const SearchSection: React.FC<Props> = ({ active, setActive, places, resentSearches }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchHandler = (value: string) => setSearchValue(value);
  const onFocusSearchHandler = () => setActive(true);
  const onPressBackButtonHandler = () => setActive(false);

  return (
    <>
      <View style={[ styles.searchHeader, active && styles.borderBottomGray ]}>
        {active &&
          <TouchableOpacity style={styles.searchHeaderBack} onPress={onPressBackButtonHandler}>
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

      {active && !searchValue &&
        <PlacesRecentSearchList resentSearches={resentSearches} places={places}/>
      }
      {active && searchValue &&
        <PlacesSearchResultList placesList={places} searchValue={searchValue} />
      }
    </>
  )
};

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 16,
    alignItems: 'center',
  },
  searchHeaderBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  borderBottomGray: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default SearchSection;