import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  attachmentContainer: {
    marginTop: height * 0.029,
    paddingLeft: width * 0.042,
    paddingBottom: height * 0.03,
  },
  attachmentLabel: {
    color: '#2C3143',
    fontSize: 0.017 * height,
    marginBottom: 0.009 * height,
    fontFamily: 'Inter-SemiBold',
  },
  attachmentImageContainer: {
    height: 0.123 * height,
    width: 0.42 * width,
    marginRight: 0.061 * width,
    marginBottom: 0.02 * height,
  },
  attachmentImage: {
    flex: 1,
    height: null,
    width: null,
  },
  attachmentOverlay: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default styles;
