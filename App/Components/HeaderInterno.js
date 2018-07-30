import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Dimensions
} from 'react-native';

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightHeader = ((totalHeight == 568) ? totalHeight *.7 : totalHeight *.12);
var aspectRatio = (totalHeight/totalWidth).toFixed(1);

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
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1B323A',
      height: heightHeader,
      flex: aspectRatio == 2.2 ? 1 : 0,
  },
  iconbars: {
    marginLeft: 10,
  },
  logoTelevisa: {
    marginRight: 10,
  },
});

export default HeaderInterno
