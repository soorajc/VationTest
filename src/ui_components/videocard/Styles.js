import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  thumbnail: {
    height: 0.596 * height,
    width: width,
  },
  thumbnailInnerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backButtonContainer: {
    paddingTop: height * 0.06,
    flexDirection: 'row',
    paddingLeft: width * 0.04,
    alignItems: 'center',
  },
  chevronLeft: {
    width: width * 0.021,
    height: height * 0.016,
    resizeMode: 'contain',
  },
  backLabel: {
    color: 'white',
    fontSize: 0.017 * height,
    marginLeft: width * 0.032,
  },
  title: {
    marginTop: height * 0.22,
    color: 'white',
    fontSize: height * 0.029,
    paddingLeft: width * 0.04,
    fontFamily: 'Avenir Black',
    fontWeight: 'bold',
  },
  videoDetailsContainer: {
    flexDirection: 'row',
    marginTop: height * 0.014,
    marginBottom: height * 0.029,
    paddingLeft: width * 0.04,
  },
  label: {
    color: '#767B8F',
    fontSize: height * 0.012,
    fontFamily: 'Inter-SemiBold',
  },
  value: {
    color: 'white',
    marginTop: height * 0.003,
    fontSize: height * 0.017,
    fontFamily: 'Inter-SemiBold',
  },
  starRatingContainer: {
    width: width * 0.267,
  },
  iterationContainer: {
    width: width * 0.342,
  },
  starContainer: {
    marginTop: height * 0.005,
    width: 30,
  },
  button: {
    height: 0.059 * height,
    width: width * 0.917,
    borderRadius: 10,
  },
  buttonLabel: {
    fontFamily: 'Inter-SemiBold',
  },
});

export default styles;
