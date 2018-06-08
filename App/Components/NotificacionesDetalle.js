import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;

class NotificacionesDetalle extends Component{
    static navigationOptions = {
        header: null,
        headerMode: null
    }

    constructor(props) {
        super(props)
    }

    render(){
        tracker.trackEvent('APP', 'Ver Notificación', {label: this.props.notification.titulo });
        return (
            <View>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                />

                <View style={styles.containerTitle}>
                    <Text style={styles.sectionTitleText}>Notificación</Text>
                </View>

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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTitle:{
        flexDirection: 'row',
        backgroundColor: '#E44858',
        justifyContent: 'center'
    },

    sectionTitleText:{
        fontSize: 15,
        flexDirection: 'column',
        alignSelf: 'center',
        color: 'white'
    },

    contBackgroundImage:{
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },

    menuSection:{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: '5%'
    },

    notificationOutterWrapper: {
        backgroundColor: '#ffffff',
        height: totalHeight * .85,
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
    }
});

export default NotificacionesDetalle
