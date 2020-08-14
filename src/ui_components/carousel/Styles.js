import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  carouselContainer: {
    height: 0.35 * height,
    backgroundColor: '#fafafa',
  },
  carousel: {
    height: '100%',
  },
  carouselImage: {
    flex: 1,
    width: null,
    height: null,
  },
  backButton: {
    width: width * 0.15,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
