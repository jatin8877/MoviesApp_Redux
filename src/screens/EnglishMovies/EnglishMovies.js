import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from '../../components/carousel/Carousel';
import {loadMovies} from '../..//Redux/actions/actions';
import {connect} from 'react-redux';

class EnglishMovies extends Component {
  render() {
    const {hollywoodmovies} = this.props;
    return (
      <View>
        <Carousel />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          {hollywoodmovies.map((movie, index) => (
            <TouchableOpacity>
              <View key={index} style={styles.cardContainer}>
                <TouchableOpacity style={styles.heartContainer}>
                  <Text style={styles.heart}>❤</Text>
                </TouchableOpacity>
                <Image
                  source={{
                    uri: movie.imgUrl,
                  }}
                  style={styles.cardImage}
                />
                <View style={styles.cardText}>
                  <Text style={styles.heading}>{movie.name}</Text>
                  <Text style={styles.paragraph}>
                    {movie.imdbRating}/ {movie.runtime}/ {movie.genre}/{' '}
                    {movie.releaseYear}
                  </Text>
                  <Text style={styles.subHeading}>
                    Director:- {movie.director}
                  </Text>
                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.watchLaterContainer}>
                      <Text style={styles.watchLater}>WATCH LATER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.watchLaterContainer}>
                      <Text style={styles.watchLater}>ADD TO FAV.</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  cardContainer: {
    width: '90%',
    backgroundColor: '#1D1A26',
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  cardImage: {
    position: 'relative',
    width: 150,
    height: '100%',
  },
  heading: {
    color: 'white',
    fontSize: 22,
  },
  paragraph: {
    marginTop: 3,
    color: 'lightgrey',
    fontSize: 12,
  },
  subHeading: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
  },
  watchLaterContainer: {
    borderColor: 'red',
    borderWidth: 1,
    width: 80,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  watchLater: {
    color: 'red',
    fontWeight: '700',
    fontSize: 10,
  },
  cardText: {
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  heart: {
    fontSize: 24,
    color: 'red',
  },
  heartContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 8,
  },
});

const mapDispatchToProps = {
  dispatchLoadProducts: movies => loadMovies(movies),
};

const mapStateToProps = state => ({
  hollywoodmovies: state.moviesReducer.hollywoodmovies,
});

export default connect(mapStateToProps, mapDispatchToProps)(EnglishMovies);
