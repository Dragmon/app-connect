import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
    SafeAreaView
} from 'react-native';

const Header = props => (
  <SafeAreaView style={styles.containerheader}>
    <TouchableWithoutFeedback onPress={() => props.toggle()}>
      <Icon
        name="bars"
        color="#ffffff"
        size={25}
        style={styles.iconbars}
      />
    </TouchableWithoutFeedback>
    <Image
      source={require('../Img/Header/logo_connect_large.png')}
    />
    <Image
      style={styles.logoTelevisa}
      source={require('../Img/Header/televisa-logo-w.png')}
    />
  </SafeAreaView>
)
const styles = StyleSheet.create({
  containerheader: {
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1B323A',
      flex:1,
  },
  iconbars: {
      marginLeft: 10,
  },
  logoTelevisa: {
      marginRight: 10,
  },
});

export default Header
