import React, {Component} from 'react';
/*const {
  View,
  Component,
  Image,
  TouchableOpacity
} = React;*/

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Right extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../Img/Header/televisa-logo-w.png')}
                    style={[{ width: 30, height: 30, }, this.props.style]}/>
            </View>
        );
    }
}