import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    WebView,
    SafeAreaView,
    Platform,
} from 'react-native';
import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

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
        this.passProps = this.props.navigation.state.params;
        let origin = this.passProps.origin,
            separador = "/";
        console.log(origin);
        fileArray = origin.split(separador);
        fileOpen = fileArray[1];
        console.log(fileOpen);
        tracker.trackEvent('APP', 'Ver Presentacion', {label: fileOpen });
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
      console.log(this.passProps.origin);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topbar}>
                    <TouchableOpacity
                        disabled={!this.state.canGoBack}
                        onPress={this._goBack.bind(this)}
                    >
                        <Text style={styles.textcontainer}>{this.state.goBackText}</Text>
                    </TouchableOpacity>
                </View>

                <WebView
                    //source={{uri: 'http://docs.google.com/gview?embedded=true&url='+this.props.presentation.url}}
                    source={{uri: 'http://docs.google.com/gview?embedded=true&url=https://apihavas.televisaventas.tv/global/uploads/' + this.passProps.origin}} //Produccion
                    //source={{uri: 'http://docs.google.com/gview?embedded=true&url=http://dev.ioncom.com.mx/havasDashboard/global/uploads/' + this.passProps.origin}} //Desarrollo
                    //source={{uri: 'http://docs.google.com/gview?embedded=true&url=http://dev.ioncom.com.mx/havasDashboard/global/uploads/plancomercial-android/presentacion.pptx'}}
                    style={{flex: 1}}
                    onLoad={this._updateGoBackCapabilities.bind(this)}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1B323A'
    },

    topbar: {
        height: 50,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#e91e53',
    },
    textcontainer :{
        fontSize: 22,
        color: '#f3f3f3',
        fontWeight: 'bold',
    }
});

export default PresentationsShowPresentation
