import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import PropTypes from 'prop-types';

import Button from '../../ui_components/button';
import Styles from './Styles';
import videoThumbnail from '../../assets/background.png';
import chevronLeft from '../../assets/chevronleft.png';

const VideoCard = (props) => {
  return (
    <ImageBackground source={videoThumbnail} style={Styles.thumbnail}>
      <View style={Styles.thumbnailInnerContainer}>
        <TouchableOpacity
          onPress={() => props.handleBackButton()}
          style={Styles.backButtonContainer}>
          <Image source={chevronLeft} style={Styles.chevronLeft} />
          <Text style={Styles.backLabel}>Back</Text>
        </TouchableOpacity>
        <Text style={Styles.title}>Child’s pose</Text>
        <View style={Styles.videoDetailsContainer}>
          <View style={Styles.starRatingContainer}>
            <Text style={Styles.label}>Difficulty</Text>
            <View style={Styles.starContainer}>
              <StarRating
                fullStarColor="#E4BB4F"
                emptyStarColor="rgba(228, 187, 79, 0.3)"
                starSize={15}
                disabled
                maxStars={5}
                rating={3}
              />
            </View>
          </View>
          <View style={Styles.iterationContainer}>
            <Text style={Styles.label}>Iterations</Text>
            <Text style={Styles.value}>10 Sätze </Text>
          </View>
          <View style={Styles.durationContainer}>
            <Text style={Styles.label}>Duration</Text>
            <Text style={Styles.value}>15 Minuten</Text>
          </View>
        </View>
        <Button
          label="Play video"
          buttonColor="#6C9DFE"
          iconName="play-circle"
          buttonContainerStyle={Styles.button}
          labelStyle={Styles.buttonLabel}
        />
        <Button
          label="Mark as done"
          buttonColor="#5BC58C"
          iconName="check-circle"
          buttonContainerStyle={Styles.button}
          labelStyle={Styles.buttonLabel}
        />
      </View>
    </ImageBackground>
  );
};

VideoCard.propTypes = {
  handleBackButton: PropTypes.func,
};

VideoCard.defaultProps = {
  handleBackButton: null,
};

export default VideoCard;
