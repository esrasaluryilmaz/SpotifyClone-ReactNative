import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const AlbumCard = ({album}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Info', {album})}
      style={styles.albumContainer}>
      <Image source={{uri: album.coverArt}} style={styles.albumImage} />
      <Text style={styles.albumName}>{album.name}</Text>
      <Text style={styles.albumArtist}>{album.artist}</Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  albumContainer: {
    width: 100,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  albumImage: {
    width: 100,
    height: 100,
  },
  albumName: {
    color: 'white',
    marginTop: 7,
  },
  albumArtist: {
    color: 'gray',
    fontSize: 12,
  },
});
