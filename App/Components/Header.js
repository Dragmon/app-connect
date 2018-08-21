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

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
//var heightHeader = totalHeight *.15;
var heightHeader = (aspectRatio == 2.2 ? totalHeight *.18 : totalHeight *.12);
var headerAndroid = totalHeight * .05;

const Header = props => (
    <SafeAreaView style={styles.containerheader}>
        {/*
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Icon
                name="bars"
                color="#ffffff"
                size={25}
                style={styles.iconbars}
            />
        </TouchableWithoutFeedback>
        */}
        <Image
            style={styles.logoApp}
            source={require('../Img/Header/logo-connect.png')}
        />
        {/*
        <Image
            style={styles.logoTelevisa}
            source={require('../Img/Header/logo-televisa.png')}
        />
        */}
    </SafeAreaView>
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
    },
    logoTelevisa: {
        marginRight: 10,
    },
    /* provisional en lo que se coloca el boton del buscador margin left*/
    logoApp:{
        marginLeft: Platform.OS === 'ios' ? (totalWidth * .35) :  (totalWidth * .40),
        width: Platform.OS === 'ios' ? (totalWidth /3) : (totalWidth /5),
        height: Platform.OS === 'ios' ?  ((totalWidth /3) * .2043) : ((totalWidth /5) * .2043),
    }
});

export default Header
