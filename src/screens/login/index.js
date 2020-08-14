import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Carousel from '../../ui_components/carousel';
import Button from '../../ui_components/button';
import {emailPattern, passwordPattern} from '../../constants';
import TextInputField from '../../ui_components/textinputfield';
import Styles from './Styles';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    validEmail: false,
    validPassword: false,
  });

  const handleFormInput = (value, label, validity) => {
    if (label === 'email') {
      setFormData({
        ...formData,
        email: value,
        validEmail: validity,
      });
    } else if (label === 'password') {
      setFormData({
        ...formData,
        password: value,
        validPassword: validity,
      });
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Carousel />
      <View style={Styles.cardView}>
        <KeyboardAwareScrollView bounces={false}>
          <Text style={Styles.title}>Welcome back</Text>
          <Text style={Styles.subTitle}>Login to your account</Text>
          <TextInputField
            label="email"
            keyboardType="email-address"
            placeholder="Email"
            validationExpression={emailPattern}
            handleTextInput={handleFormInput}
          />
          <TextInputField
            label="password"
            placeholder="Password"
            validationExpression={passwordPattern}
            secureTextEntry
            handleTextInput={handleFormInput}
          />
          <View style={Styles.buttonContainer}>
            <Button label="Login" buttonColor="#6C9DFE" />
          </View>
          <Text style={Styles.forgotPasswordLabel}>Forgot your password?</Text>
          <Text style={Styles.footerLabel}>
            Don't have an account?{' '}
            <Text style={Styles.signUpLabel}>Sign up</Text>
          </Text>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
