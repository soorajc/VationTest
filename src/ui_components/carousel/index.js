import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

import carouselImages from './dummyImages';
import backArrow from '../../assets/arrowleft.png';

import Styles from './Styles';

const Carousel = (props) => {
  return (
    <View style={Styles.carouselContainer}>
      <Swiper
        style={Styles.carousel}
        showsButtons={false}
        dotColor="rgba(255, 255, 255, 0.5)"
        loop={false}
        activeDotColor="white">
        {carouselImages.map((image, index) => (
          <ImageBackground
            key={index}
            source={image}
            style={Styles.carouselImage}>
            <TouchableOpacity
              onPress={() => props.handleBackButton()}
              style={Styles.backButton}>
              <Image source={backArrow} />
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};

Carousel.propTypes = {
  handleBackButton: PropTypes.func,
};

Carousel.defaultProps = {
  handleBackButton: null,
};

export default Carousel;
