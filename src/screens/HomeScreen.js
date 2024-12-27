import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {ArtistContext} from '../context/ArtistContext';
import ArtistCard from '../components/ArtistCard';
import {AlbumContext} from '../context/AlbumContext';
import AlbumCard from '../components/AlbumCard';
import Error from '../components/Error';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const {artists, loading, error} = useContext(ArtistContext);
  const {
    albums,
    loading: albumsLoading,
    error: albumsError,
  } = useContext(AlbumContext);

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      {albumsLoading ? (
        <Loader />
      ) : albumsError ? (
        <Error error={albumsError} />
      ) : (
        <ScrollView
          style={{marginTop: 50}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s',
                }}
                style={styles.headerImage}
              />
              <Text style={styles.headerText}>SPOTIFY</Text>
            </View>

            <MaterialCommunityIcons
              name="lightning-bolt-outline"
              color="white"
              size={24}
            />
          </View>

          <View style={styles.tabButtons}>
            <Pressable style={styles.tabButton}>
              <Text style={styles.tabButtonText}>Music</Text>
            </Pressable>
            <Pressable style={styles.tabButton}>
              <Text style={styles.tabButtonText}>Podcast & Shows</Text>
            </Pressable>
          </View>

          <View>
            <Pressable
              onPress={() => navigation.navigate('Songs')}
              style={styles.likedSongs}>
              <LinearGradient colors={['#33006F', '#FFFFFF']}>
                <Pressable
                  style={{
                    width: 55,
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="heart" color="white" size={24} />
                </Pressable>
              </LinearGradient>
              <Text style={styles.likedSongsText}>Songs</Text>
            </Pressable>

            <Pressable style={styles.likedSongs}>
              <LinearGradient colors={['#33006F', '#FFFFFF']}>
                <Pressable
                  style={{
                    width: 55,
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="moon" color="white" size={24} />
                </Pressable>
              </LinearGradient>
              <Text style={styles.likedSongsText}>Rock & Roll</Text>
            </Pressable>

            <Pressable style={styles.likedSongs}>
              <LinearGradient colors={['#33006F', '#FFFFFF']}>
                <Pressable
                  style={{
                    width: 55,
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="star" color="white" size={24} />
                </Pressable>
              </LinearGradient>
              <Text style={styles.likedSongsText}>Caz</Text>
            </Pressable>

            <Text style={styles.sectionTitle}>Your Top Artist</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {artists?.map((artist, index) => (
                <ArtistCard key={index} artist={artist} />
              ))}
            </ScrollView>

            <View style={{height: 10}} />

            <Text style={styles.sectionTitle}>Popüler Albums</Text>
            <ScrollView horizontal>
              {albums?.map((album, index) => (
                <AlbumCard key={index} album={album} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
  tabButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 5,
    marginHorizontal: 12,
  },
  tabButton: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 30,
  },
  tabButtonText: {
    color: 'white',
    fontSize: 15,
  },
  likedSongs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#202020',
  },
  likedSongsText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: 'white',
    marginHorizantal: 10,
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
