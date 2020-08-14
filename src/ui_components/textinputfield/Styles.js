import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  textInput: {
    height: 0.059 * height,
    backgroundColor: 'rgba(142, 142, 147, 0.12)',
    width: 0.84 * width,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    color: 'rgba(0, 0, 0, 0.4)',
    marginBottom: height * 0.012,
    borderRadius: 20,
    paddingLeft: 0.05 * width,
    fontSize: 0.02 * height,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
