import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

class Movie extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: 'https://cdn.wallpapersafari.com/66/53/IiFMyZ.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardText}>
            <Text style={styles.heading}>Intersteller</Text>
            <Text style={styles.paragraph}>
              PG-13/ 2h 49m/ Adventure, Drama, Sci-Fi
            </Text>
            <Text style={styles.subHeading}>SUMMARY</Text>
            <Text style={styles.paragraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
            <Text style={styles.subHeading}>Jatin/kumar/agrohiya/ji</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.watchLaterContainer}>
                <Text style={styles.watchLater}>WATCH LATER</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.watchLaterContainer}>
                <Text style={styles.watchLater}>ADD TO FAV.</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.heart}>❤</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1a26',
    flex: 1,
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  heading: {
    color: 'white',
    fontSize: 32,
  },
  paragraph: {
    marginTop: 3,
    color: 'lightgrey',
    fontSize: 13,
  },
  subHeading: {
    marginTop: 5,
    color: 'white',
    fontSize: 16,
  },
  watchLaterContainer: {
    borderColor: 'red',
    borderWidth: 2,
    width: 130,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  watchLater: {
    color: 'red',
    fontWeight: '700',
  },
  cardText: {
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  heart: {
    fontSize: 32,
    color: 'red',
  },
});
export default Movie;
