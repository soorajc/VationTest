import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from './Styles';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        Styles.buttonContainer,
        {backgroundColor: props.buttonColor},
        props.buttonContainerStyle && props.buttonContainerStyle,
      ]}>
      {props.iconName && (
        <Icon
          name={props.iconName}
          size={20}
          color={props.iconColor}
          style={Styles.icon}
        />
      )}
      <Text style={Styles.buttonLabel}>{props.label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  buttonContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
};

Button.defaultProps = {
  buttonColor: 'red',
  buttonContainerStyle: null,
  label: 'Label Text',
  iconName: null,
  iconColor: 'white',
};

export default Button;
