/*
Para la opacidad del componente al abrir el buscador se edita el componente react-native-slide-menu/
/build/styles.js overlay, cambiando el color y agregando opacidad
*/
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import Header from './Header';
import Body from './Body';
import BodyTablet from './Body-tablet';
import Search from './Search';
import Footer from './Footer';
import api from '../api/api';

import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

import {
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Alert,
    AlertIOS,
    SafeAreaView,
    PushNotificationIOS,
    NetInfo
} from 'react-native';

import {deleteFiles} from '../api/deletefile';

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
var slideMenudisplace = totalWidth*.90;
var heightHeader = totalHeight *.10;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);

export default class App extends Component<{}> {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            iconHeader: 'search',
            hideViewImage : aspectRatio == 1.3 ? true : false,
        }
        console.log("estado hideViewImage : ",this.state.hideViewImage);
    }

    componentWillMount() {
        PushNotificationIOS.requestPermissions();
        // Add listener for push notifications
        PushNotificationIOS.addEventListener('notification', this._onRemoteNotification.bind(this));
        // Add listener for register
        PushNotificationIOS.addEventListener('register', this._regToken);
        //Borrado de archivos
        deleteFiles();
    }

    componentWillUnmount() {
        // Remove listener for push notifications
        PushNotificationIOS.removeEventListener('notification', this._onRemoteNotification.bind(this));
        // Remove listener for register
        PushNotificationIOS.removeEventListener('register',this._regToken);
    }

    _onRemoteNotification(notification) {
        const result = `${notification.getMessage()}`;

        tracker.trackEvent('APP', 'Notificaci??n recibida', {texto: result });

        AlertIOS.alert('Nueva Notificaci??n', result, [
            {
                text: 'Ir a las notificaciones',
                onPress: () => this.props.navigation.navigate('Notificaciones'),
            },
        ]);
    }

    _regToken(token){
        api.regDeviceNotifications(token)
            .then((responseData) => {
            })
            .catch(function(error) {
                AlertIOS.alert('No tenemos acceso a Internet','Para poder mantenerte actualizado con notificaciones necesitamos mantengas tu conexi??n a Internet activa')
            });
    }

    static navigationOptions = {
        header: null,
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
            //iconHeader: 'times',
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <SideMenu
                    menu={<Search navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>}
                    isOpen={this.state.isOpen}
                    openMenuOffset={slideMenudisplace}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={styles.sideMenu}
                >
                    <Header
                        style={styles.containerHeader}
                        toggle={this.toggle.bind(this)}
                        navigation={this.props.navigation}
                    />

                    {
                        this.state.hideViewImage == false ?
                            <Body
                                style={styles.containerBody}
                                navigation={this.props.navigation} />
                            :
                            <BodyTablet
                                style={styles.containerBody}
                                navigation={this.props.navigation} />
                    }
                    <Footer
                        style={styles.containerFooter}
                    />
                </SideMenu>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B323A',
        //height: totalHeight,
        flexDirection: 'column',
    },
    containerHeader:{
        //height: heightHeader,
        //flex: 1,
        //backgroundColor: '#2196F3',
    },
    containerBody:{
        //flex: 8,
        //backgroundColor: '#8BC34A',
        //flexDirection: 'column',
    },
    containerFooter:{
        //height: heightHeader,
        //flex: 1,
        //backgroundColor: '#e3aa1a',
    },

});
