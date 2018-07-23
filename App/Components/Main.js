import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import Header from './Header';
import Body from './Body';
import Menu from './Menu-fondo';
import Footer from './Footer';
import api from '../api/api';

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
var slideMenudisplace = totalWidth*.90;
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

export default class App extends Component<{}> {
    constructor(props){
        super(props)
        this.state = {
        isOpen: false
        }
    }

    componentWillMount() {
        PushNotificationIOS.requestPermissions();
        // Add listener for push notifications
        PushNotificationIOS.addEventListener('notification', this._onNotification.bind(this));
        // Add listener for register
        PushNotificationIOS.addEventListener('register', this._regToken);

        NetInfo.isConnected.fetch().then(isConnected => {
            if (!isConnected){
                Alert.alert(
                    'Sin Conexión',
                    'Su dispositivo no tiene conexion a internet',
                )
            };
        });
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
                onPress: () => this.navigate('Notifications', 'NotificationsPageComponent')
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
                    menu={<Menu navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>}
                    isOpen={this.state.isOpen}
                    openMenuOffset={slideMenudisplace}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>
                    <Body navigation={this.props.navigation} />
                    <Footer/>
                </SideMenu>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#036666',
      height: totalHeight,
  },
});
