import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    SafeAreaView,
    Platform,
    ImageBackground, PushNotificationIOS
}
    from 'react-native';
import {
    totalHeight,
    totalWidth,
    heightTitle,
    heightMenuSection
} from '../api/shared';

import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

/*
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
*/

class NotificacionesDetalle extends Component{
    static navigationOptions = {
        header: null,
        headerMode: null
    }

    constructor(props) {
        super(props)
    }

    componentWillMount(){
        PushNotificationIOS.setApplicationIconBadgeNumber(0);
        tracker.trackEvent('APP', 'Ver notificacion', {label: this.props.notification.titulo });
    }

    render(){
        //tracker.trackEvent('APP', 'Ver Notificación', {label: this.props.notification.titulo });
        return (
            <SafeAreaView style={styles.safeArea}>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                />
                <Image
                    style={styles.titleseccion}
                    source={require('../Img/Notificaciones/encabezado-notificaciones.png')}
                />

                <View style={styles.notificationOutterWrapper}>
                    <Image
                        style={styles.notificationMainImage}
                        source={{uri: this.props.notification.imagen}}
                    />

                    <View style={{flex: 1}}>
                        <ScrollView style={styles.notificationInnerWrapper}>
                            <Text style={styles.notificationTitle}>
                                {this.props.notification.titulo}{"\n"}
                                <Text style={styles.notificationCategory}>
                                    {this.props.notification.categoria}
                                </Text>
                                {"\n"}
                            </Text>

                            <Text style={styles.notificationContent}>
                                {this.props.notification.contenido}{"\n"}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    notificationOutterWrapper: {
        backgroundColor: '#ffffff',
        //height: totalHeight * .85,
        height : heightMenuSection,
    },

    notificationMainImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: totalWidth,
        height: totalHeight*.25,
    },

    notificationInnerWrapper: {
        padding: 20,
    },

    notificationTitle: {
        fontWeight:'bold',
        fontSize:16,
        color:'#615c84',
    },

    notificationCategory: {
        fontWeight:'normal',
        fontSize:11,
        color:'#5A5A5A',
    },

    titleseccion:{
        width: totalWidth,
        height: heightTitle,
    },

    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    }
});

export default NotificacionesDetalle
