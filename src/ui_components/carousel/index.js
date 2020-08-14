import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

import carouselImages from './dummyImages';
import backArrow from '../../assets/arrowleft.png';

import Styles from './Styles';

const Carousel = () => {
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
            <TouchableOpacity style={Styles.backButton}>
              <Image source={backArrow} />
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;
