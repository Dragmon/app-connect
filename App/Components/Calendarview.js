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

class CalendarView extends Component{
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
                    source={{uri: 'https://calendar.google.com/calendar/embed?showCalendars=0&showPrint=0&showTabs=0&showTitle=0&height=600&wkst=1&hl=es_419&bgcolor=%23f2f2f2&src=televisarincondelplanner@ioncom.com.mx&color=%23875509&ctz=America/Mexico_City'}}
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

export default CalendarView
