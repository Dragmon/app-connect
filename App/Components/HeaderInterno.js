import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Dimensions,
    Platform
} from 'react-native';

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
var heightHeader = (aspectRatio == 2.2 ? totalHeight *.15 : aspectRatio == 1.3 ? totalHeight * .08 : totalHeight *.09);
var headerAndroid = totalHeight * .07;

const HeaderInterno = props => (
  <View style={styles.containerheader}>
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Icon
        name="angle-left"
        color="#ffffff"
        size={
            aspectRatio == 1.3 ? 55 : 35
        }
        style={styles.iconbars}

      />
    </TouchableWithoutFeedback>
    <Image
      source={require('../Img/Header/logo-connect.png')}
      style={styles.logoApp}
    />
    <Image
      style={styles.logoTelevisa}
      source={require('../Img/Header/logo-televisa.png')}
    />
  </View>
)
const styles = StyleSheet.create({
    containerheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1B323A',
        flex: aspectRatio == 2.2 ? 1 : 0,
        height: Platform.OS === 'ios' ? heightHeader: headerAndroid,
    },
    iconbars: {
        marginLeft: 10,
        width:40,
    },
    logoTelevisa: {
        marginRight: 10,
        ...Platform.select({
            ios:{
                width: aspectRatio == 1.3 ? (totalWidth /15) : (totalWidth /8),
                height: aspectRatio == 1.3 ? (totalWidth /15) * .8333 : (totalWidth /8) * .8333,
            },
            android:{
                width: (totalWidth /12),
                height: ((totalWidth /12) * .8333),
            }
        })
        /*
        width: Platform.OS === 'ios' ? (totalWidth/8) : (totalWidth /12),
        height: Platform.OS === 'ios' ?  ((totalWidth/8) * .8333) : ((totalWidth /12) * .8333),
        */
    },
    logoApp:{
        ...Platform.select({
            ios:{
                width: aspectRatio == 1.3 ? (totalWidth /4) : (totalWidth /3),
                height: aspectRatio == 1.3 ? (totalWidth /4) * .2043 : (totalWidth /3) * .2043,
            },
            android:{
                width: (totalWidth /5),
                height: ((totalWidth /5) * .2043),
            }
        })
        /*
        width: Platform.OS === 'ios' ? (totalWidth /3) : (totalWidth /5),
        height: Platform.OS === 'ios' ?  ((totalWidth /3) * .2043) : ((totalWidth /5) * .2043),
        */
    }
});

export default HeaderInterno
