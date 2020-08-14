import React from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {StackActions} from '@react-navigation/native';

import Styles from './Styles';
import VideoCard from '../../ui_components/videocard';
import AttachmentList from '../../ui_components/attachmentList';
import {logOut} from '../../api';

const Home = (props) => {
  const handleLogOut = async () => {
    const logOutResult = await logOut();
    if (logOutResult === 'success') {
      props.navigation.dispatch(StackActions.replace('Welcome'));
    } else {
      Alert.alert('Message', 'Error while logging out try again');
    }
  };

  const handleBackButton = () => {
    Alert.alert(
      'Message',
      'Would you like to log out ?',
      [
        {
          text: 'Yes',
          onPress: () => handleLogOut(),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <ScrollView bounces={false}>
      <VideoCard handleBackButton={handleBackButton} />
      <View style={Styles.descriptionContainer}>
        <Text style={Styles.descriptionTitle}>Description</Text>
        <Text style={Styles.descriptionContent}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Text>
      </View>
      <AttachmentList />
    </ScrollView>
  );
};

export default Home;
