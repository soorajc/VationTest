import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    height: 0.059 * height,
    width: 0.84 * width,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0088FF',
    borderRadius: width * 0.3,
    marginBottom: 0.016 * height,
  },
  icon: {
    marginRight: '4.3%',
  },
  buttonLabel: {
    color: 'white',
    fontSize: height * 0.02,
    fontFamily: 'SFProText-Semibold',
  },
});

export default styles;
