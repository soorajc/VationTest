import {StyleSheet, Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  cardView: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? height * 0.39 : height * 0.33,
    height: Platform.OS === 'ios' ? 0.61 * height : 0.63 * height,
    width: width,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: height * 0.046,
  },
  title: {
    color: '#0A1F44',
    alignSelf: 'center',
    fontSize: 0.041 * height,
    fontFamily: 'Avenir Black',
    fontWeight: '900',
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.4)',
    alignSelf: 'center',
    fontSize: 0.02 * height,
    marginTop: 0.007 * height,
    fontFamily: 'Roboto-Regular',
    marginBottom: 0.051 * height,
  },
  buttonContainer: {
    paddingTop: 0.04 * height,
    paddingBottom: 0.04 * height,
  },
  forgotPasswordLabel: {
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Roboto-Regular',
    fontSize: 0.02 * height,
  },
  footerLabel: {
    marginTop: 0.055 * height,
    alignSelf: 'center',
    fontSize: 0.02 * height,
    color: '#B8BBC6',
    fontFamily: 'Roboto-Regular',
  },
  signUpLabel: {
    color: '#5BC58B',
    fontWeight: 'bold',
  },
});

export default styles;
