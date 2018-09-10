import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import Header from './Header';
import Body from './Body';
import Search from './Search';
import Footer from './Footer';
import api from '../api/api';

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

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
var slideMenudisplace = totalWidth*.90;
var heightHeader = totalHeight *.10;

export default class App extends Component<{}> {
    constructor(props){
        super(props)
        this.state = {
        isOpen: false
        }
    }

    /*
    componentWillMount() {
        PushNotificationIOS.requestPermissions();
        // Add listener for push notifications
        PushNotificationIOS.addEventListener('notification', this._onNotification.bind(this));
        // Add listener for register
        PushNotificationIOS.addEventListener('register', this._regToken);
    }

    componentWillUnmount() {
        // Remove listener for push notifications
        PushNotificationIOS.removeEventListener('notification', this._onNotification.bind(this));
        // Remove listener for register
        PushNotificationIOS.removeEventListener('register',this._regToken);
    }

    _onNotification(notification) {
        msg = notification.getMessage();
        GoogleAnalytics.trackEvent('APP', 'Notificación recibida', {texto: msg });
        AlertIOS.alert(
            'Notificación',
            notification.getMessage(),
            [{
                text: 'Ver más',
                //onPress: () => this.navigate('Notifications', 'Notificaciones')
                onPress: () => navigate('Notificaciones'),
            }]
        );
    }

    _regToken(token){
        api.regDeviceNotifications(token)
            .then((responseData) => {
            })
            .catch(function(error) {
                AlertIOS.alert('No tenemos acceso a Internet','Para poder mantenerte actualizado con notificaciones necesitamos mantengas tu conexión a Internet activa')
            });
    }
    */

    static navigationOptions = {
        header: null,
    }

    toggle(){
        this.setState({
        isOpen: !this.state.isOpen
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
                    //isOpen={this.state.isOpen}
                    openMenuOffset={slideMenudisplace}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <Header
                        style={styles.containerHeader}
                        navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>
                    <Body
                        style={styles.containerBody}
                        navigation={this.props.navigation} />
                    <Footer
                        style={styles.containerFooter}
                    />
                </SideMenu>

                {/*Prueba del uso de flexbox*/
                /*
                <View style={styles.containerHeader}></View>
                <View style={styles.containerBody}>
                    <View style={styles.container1}></View>
                    <View style={styles.container2}></View>
                </View>
                <View style={styles.containerFooter}></View>
                */}
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
    }
/*
    container1:{
        flex: 1,
        backgroundColor: '#b9a8e3',
    },
    container2:{
        flex: 2,
        backgroundColor: '#8daae3',
    },
*/
});
