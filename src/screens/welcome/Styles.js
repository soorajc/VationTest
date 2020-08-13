import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
    paddingTop: '11%',
  },
  title: {
    color: 'white',
    fontSize: height * 0.054,
    marginLeft: width * 0.086,
    textAlign: 'left',
    fontFamily: 'Avenir Black',
    fontWeight: '900',
  },
  description: {
    color: 'white',
    fontSize: height * 0.02,
    marginLeft: width * 0.089,
    marginTop: height * 0.027,
    marginBottom: height * 0.093,
    width: width * 0.6,
    fontFamily: 'Roboto-Regular',
  },
  footer: {
    marginBottom: height * 0.027,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Avenir-Heavy',
  },
});

export default styles;
