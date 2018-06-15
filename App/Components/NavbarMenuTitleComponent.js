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

export default class Center extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../Img/Header/logo_connect_large.png')}
                    style={[{ width: 100, height: 20, }, this.props.style]}/>
            </View>
        );
    }
}