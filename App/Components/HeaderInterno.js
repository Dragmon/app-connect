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


const HeaderInterno = props => (
  <View style={styles.containerheader}>
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Icon
        name="angle-left"
        color="#ffffff"
        size={45}
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
  </View>
)
const styles = StyleSheet.create({
  containerheader: {
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#3581BC',
  },
  iconbars: {
    marginLeft: 10,
  },
  logoTelevisa: {
    marginRight: 10,
  },
});

export default HeaderInterno
