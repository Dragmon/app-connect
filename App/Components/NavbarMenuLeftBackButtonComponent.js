import React, {Component} from 'react';
/*const {
  Component,
  Image,
  TouchableOpacity
} = React;*/

import {
    Image,
    TouchableOpacity
} from 'react-native';

export default class LeftBack extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image
                    source={require('../Img/General/back_white.png')}
                    style={[{ width: 20, height: 20, }, this.props.style]}/>
            </TouchableOpacity>
        );
    }
}