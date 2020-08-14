import React from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';

import Styles from './Styles';
import attachmentImage from '../../assets/attachment.png';

const AttachmentList = () => {
  return (
    <View style={Styles.attachmentContainer}>
      <Text style={Styles.attachmentLabel}>Attachments</Text>
      <FlatList
        data={['a1', 'a2', 'a3', 'a4']}
        numColumns={2}
        renderItem={({item, index}) => (
          <View style={Styles.attachmentImageContainer}>
            <ImageBackground
              borderRadius={10}
              source={attachmentImage}
              style={Styles.attachmentImage}>
              <View style={Styles.attachmentOverlay} />
            </ImageBackground>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default AttachmentList;
