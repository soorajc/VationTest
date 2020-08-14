import React, {useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StackActions} from '@react-navigation/native';

import Carousel from '../../ui_components/carousel';
import Button from '../../ui_components/button';
import Loader from '../../ui_components/loader';
import {EMAIL_PATTERN, PASSWORD_PATTERN} from '../../constants';
import TextInputField from '../../ui_components/textinputfield';
import Styles from './Styles';
import {createAccount, loginToAccount} from '../../api';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    validEmail: false,
    validPassword: false,
  });

  const [loading, setLoading] = useState(false);

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

  const goBack = () => {
    props.navigation.goBack();
  };

  const launchHomeScreen = () => {
    props.navigation.dispatch(StackActions.replace('Home'));
  };

  const {formType} = props.route.params;

  const handleSubmitButton = () => {
    if (!formData.validEmail) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
    } else if (!formData.validPassword) {
      Alert.alert(
        'Validation Error',
        'Password not in valid format. Need minimum 6 characters',
      );
    } else {
      handleFormSubmit();
    }
  };

  const handleFormSubmit = async () => {
    const email = formData.email;
    const password = formData.password;

    if (formType !== 'login') {
      setLoading(true);
      const signUpResult = await createAccount(email, password);
      setLoading(false);
      if (signUpResult === 'success') {
        launchHomeScreen();
      } else {
        setTimeout(() => Alert.alert('Message', signUpResult), 300);
      }
    } else {
      setLoading(true);
      const loginResult = await loginToAccount(email, password);
      setLoading(false);
      if (loginResult === 'success') {
        launchHomeScreen();
      } else {
        setTimeout(() => Alert.alert('Message', loginResult), 300);
      }
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Carousel handleBackButton={goBack} />
      <View style={Styles.cardView}>
        <KeyboardAwareScrollView bounces={false}>
          <Text style={Styles.title}>
            {formType === 'login' ? 'Welcome back' : 'Join us'}
          </Text>
          <Text style={Styles.subTitle}>
            {formType === 'login'
              ? 'Login to your account'
              : 'Create your new account'}
          </Text>
          <TextInputField
            label="email"
            keyboardType="email-address"
            placeholder="Email"
            validationExpression={EMAIL_PATTERN}
            handleTextInput={handleFormInput}
          />
          <TextInputField
            label="password"
            placeholder="Password"
            validationExpression={PASSWORD_PATTERN}
            secureTextEntry
            handleTextInput={handleFormInput}
          />
          <View style={Styles.buttonContainer}>
            <Button
              label={formType === 'login' ? 'Login' : 'Sign Up'}
              buttonColor="#6C9DFE"
              handleButton={handleSubmitButton}
            />
          </View>
          {formType === 'login' && (
            <View>
              <Text style={Styles.forgotPasswordLabel}>
                Forgot your password?
              </Text>
              <Text style={Styles.footerLabel}>
                Don't have an account?{' '}
                <Text style={Styles.signUpLabel}>Sign up</Text>
              </Text>
            </View>
          )}
        </KeyboardAwareScrollView>
      </View>
      {loading && <Loader />}
    </SafeAreaView>
  );
};

export default Login;
