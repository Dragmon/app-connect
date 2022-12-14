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
        //console.log("origin");
        //console.log(origin);
        fileArray = origin.split(separador);
        fileOpen = fileArray[6];  //Produccion
        //fileOpen = fileArray[7];  //Desarrollo
        //console.log("fileOpen");
        //console.log(fileOpen);
        tracker.trackEvent('APP', 'Ver Catalogo', {label: fileOpen });

        UrlFile = fileArray[5] + separador + fileArray[6]; //Produccion
        //UrlFile = fileArray[6] + separador + fileArray[7];  //Desarrollo

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
      //console.log("render");
      //console.log(UrlFile);
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
                    //source={{uri: 'http://docs.google.com/gview?embedded=true&url='+this.props.presentation.url}}
                    source={{uri: 'http://docs.google.com/gview?embedded=true&url=https://adminconnect.televisaventas.tv/global/uploads/' + UrlFile}} //Produccion
                    //source={{uri: 'http://docs.google.com/gview?embedded=true&url=http://dev.ioncom.com.mx/havasDashboard/global/uploads/' + UrlFile}} //Desarrollo
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
