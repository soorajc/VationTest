import React, {useState} from 'react';
import {Text, SafeAreaView, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from '@react-native-community/google-signin';
import {StackActions} from '@react-navigation/native';

import Button from '../../ui_components/button';
import {titles, description} from './content';
import {GOOGLE_WEB_CLIENT_ID} from '../../constants';
import {signInWithGoogleAccount} from '../../api';
import buttonConfig from './buttonConfig';
import Loader from '../../ui_components/loader';
import Styles from './Styles';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});

const Welcome = (props) => {
  const [loading, setLoading] = useState(false);
  const handleButton = (buttonId) => {
    if (buttonId === '#emailsignup') {
      props.navigation.navigate('Login', {formType: 'signup'});
    } else if (buttonId === '#googlelogin') {
      setLoading(true);
      handleGoogleSignIn();
    } else if (buttonId === '#simplelogin') {
      props.navigation.navigate('Login', {formType: 'login'});
    }
  };

  const handleGoogleSignIn = async () => {
    const signInResult = await signInWithGoogleAccount();
    setLoading(false);
    if (signInResult === 'sign_in_error') {
      setTimeout(
        () => Alert.alert('Message', 'Unable to complete google sign in'),
        300,
      );
    } else {
      props.navigation.dispatch(StackActions.replace('Home'));
    }
  };

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
            handleButton={() => handleButton(button.id)}
          />
        ))}
        <Text style={Styles.footer}>Explore the classes</Text>
      </LinearGradient>
      {loading && <Loader />}
    </SafeAreaView>
  );
};

export default Welcome;
