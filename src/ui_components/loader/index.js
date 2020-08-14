import React, {useState} from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';

import Styles from './Styles';

const Loader = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(true)}>
      <View style={Styles.loaderContainer}>
        <ActivityIndicator color="#FCD200" size="large" />
      </View>
    </Modal>
  );
};

export default Loader;
