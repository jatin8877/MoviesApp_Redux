import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6;

const images = [
  'https://cdn.wallpapersafari.com/53/79/ajwtby.jpg',
  'https://cdn.wallpapersafari.com/66/53/IiFMyZ.jpg',
  'https://webneel.com/daily/sites/default/files/images/daily/08-2018/2-india-movie-poster-design-hindi-bjirao-mastani.jpg',
  'https://i.ytimg.com/vi/_e9y729xeck/maxresdefault.jpg',
  'https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg',
];

export default class Caresoledata extends React.Component {
  state = {
    isActive: 0,
  };
  changeSlider = ({nativeEvent}) => {
    const slider = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slider !== this.state.isActive) {
      this.setState({isActive: slider});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          onScroll={this.changeSlider}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.scrollView}>
          {images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {images.map((x, y) => (
            <Text
              key={y}
              style={y == this.state.isActive ? styles.dots : styles.activeDot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width,
    height,
    marginTop: 5,
    borderRadius: 20,
    elevation: 30,
    overflow: 'hidden',
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },

  activeDot: {
    color: '#888',
    margin: 4,
    fontSize: 22,
  },
  dots: {
    color: '#fff',
    margin: 4,
    fontSize: 22,
  },
  scrollView: {
    width,
    height,
  },
});
