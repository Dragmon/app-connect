import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const ButtonStyles = StyleSheet.create({
    infoDocument:{
        flexDirection: 'row',
    },
    buttonView:{
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width)/2,
    },
    buttonDownload:{
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width)/2
    },
    textButtonDocument:{

    },
});

export default ButtonStyles;