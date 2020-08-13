import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../../ui_components/button';
import {titles, description} from './content';
import buttonConfig from './buttonConfig';
import Styles from './Styles';

const Welcome = (props) => {
  return (
    <SafeAreaView style={Styles.container}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.7)', '#000000']}
        style={Styles.gradientContainer}>
        {titles.map((label, index) => (
          <Text style={Styles.title} key={index}>
            {label}
          </Text>
        ))}
        <Text style={Styles.description}>{description}</Text>
        {buttonConfig.map((button) => (
          <Button
            key={button.id}
            iconName={button.icon}
            label={button.label}
            buttonColor={button.color}
          />
        ))}
        <Text style={Styles.footer}>Explore the classes</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Welcome;
