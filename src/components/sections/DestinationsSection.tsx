import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

import screenStyles from '../../styles/screen';

type Props = {
  destinationsList: any[],
  sectionTitle: string
}

const DestinationsSection: React.FC<Props> = ({ destinationsList, sectionTitle }) => {
  return (
    <>
      <View style={styles.subSectionHeader}>
        <Text style={screenStyles.subSectionText}>{sectionTitle}</Text>
      </View>
      <View style={styles.listContainerRow}>
        {destinationsList.map(place =>
          <TouchableOpacity style={styles.item}>
            <Image
              source={{ uri: place.imgURI }}
              style={styles.itemImage}
            />
            <Text style={styles.destinationName}>{place.title}</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  listContainerRow: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between',
  },
  item: {
    marginBottom: 14,
    overflow: 'hidden',
  },
  itemImage: {
    height: Dimensions.get('window').width / 2 - 22,
    width: Dimensions.get('window').width / 2 - 22,
  },
  destinationName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    bottom: 10,
    left: 6,
  },
});

export default DestinationsSection;
