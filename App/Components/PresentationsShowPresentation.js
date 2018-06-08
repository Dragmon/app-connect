import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    WebView,
} from 'react-native';

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .116;

const api = require('../api/api');

class PresentationsShowPresentation extends Component{
    static navigationOptions = {
        header: null,
        headerMode: null
    };

    constructor(props) {
        super(props)

        this.state = {
            goBackText: '',
            canGoBack: false,
        }
    }

    _goBack() {
        this.props.navigation.goBack()
    }

    _updateGoBackCapabilities() {
        this.setState({
            canGoBack: true,
            goBackText: '<  Regresar'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <TouchableOpacity
                        disabled={!this.state.canGoBack}
                        onPress={this._goBack.bind(this)}
                    >
                        <Text style={{fontSize: 16, color: '#f3f3f3'}}>{this.state.goBackText}</Text>
                    </TouchableOpacity>
                </View>

                <WebView
                    source={{uri: 'http://docs.google.com/gview?embedded=true&url='+this.props.presentation.url}}
                    //source={{uri: 'http://docs.google.com/gview?embedded=true&url=https://apihavas.televisaventas.tv/global/uploads/parrilla/parrillapaga.xlsx'}}
                    style={{flex: 1}}
                    onLoad={this._updateGoBackCapabilities.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5fcff'
    },

    topbar: {
        height: 30,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#666666',
    },
});

export default PresentationsShowPresentation
