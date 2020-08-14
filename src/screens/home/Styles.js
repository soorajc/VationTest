import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  descriptionContainer: {
    paddingTop: 0.029 * height,
    paddingLeft: width * 0.042,
  },
  descriptionTitle: {
    color: '#2C3143',
    fontSize: 0.017 * height,
    marginBottom: 0.009 * height,
    fontFamily: 'Inter-SemiBold',
  },
  descriptionContent: {
    width: 0.91 * width,
    textAlign: 'left',
    fontSize: 0.017 * height,
    color: '#707070',
    fontFamily: 'Inter-Regular',
  },
});

export default styles;
