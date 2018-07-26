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
        //height: totalHeight * .106,
        //height: Platform.OS === 'ios' ? ((totalHeight == 568) ? (totalHeight * .106): 60 ): 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1B323A',
        flex: aspectRatio == 2.2 ? 1 : 0,
    },
    iconbars: {
        marginLeft: 10,
    },
    logoTelevisa: {
        marginRight: 10,
    },
    /* provisional en lo que se coloca el boton del buscador*/
    logoApp:{
        marginLeft: totalWidth * .35,
    }
});

export default Header
