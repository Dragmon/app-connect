import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    totalWidth,
    aspectRatio
} from '../api/shared';

const ButtonStyles = StyleSheet.create({
    infoDocument:{
        flexDirection: 'row',
    },
    buttonView:{
        justifyContent: 'center',
        alignItems: 'center',
        width: (totalWidth)/2,
        height: 40,
        backgroundColor: '#E91E53',
    },
    buttonDownload:{
        justifyContent: 'center',
        alignItems: 'center',
        width: (totalWidth)/2,
        height: 40,
        backgroundColor: '#429999',
    },
    textButtonDocument:{
        color: '#FFFFFF',
        fontSize: (aspectRatio == 1.8 ? 15 : 18),
        fontWeight: 'bold',
    },
});

export default ButtonStyles;