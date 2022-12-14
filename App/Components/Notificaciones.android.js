import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Alert,
    Image,
    ListView,
    ScrollView,
    StatusBar,
    Button,
    SafeAreaView,
    Platform,
    ImageBackground,
    NativeModules,
    PushNotificationIOS
} from 'react-native';

import {
    totalHeight,
    totalWidth,
    heightTitle,
    heightMenuSection
} from '../api/shared';

/*
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightList = totalHeight *.16;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
var heightHeader = (aspectRatio == 2.2 ? totalHeight *.15 : totalHeight *.09);
var heightTitle = totalWidth * 0.1136;
var heightMenuSection = totalHeight - (heightHeader + heightTitle);
*/

const api = require('../api/api');

class Notificaciones extends Component{
    static navigationOptions = {
        header: null,
        headerMode: null
    }

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            dataNotifications: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2
            })
        }
    }

    componentWillMount() {
        //PushNotificationIOS.setApplicationIconBadgeNumber(0);
        api
            .getNotifications()
            .then((response) => this.handleResponse(response))
            .catch((rejection) => { this.setState({ isLoading: false }) })
    }

    handleResponse(response) {
        this.setState({
            isLoading: true,
            dataNotifications: this.state.dataNotifications.cloneWithRows(response)
        })
    }

    _renderLoadingDataView() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                    style={styles.header}
                />
                <Image
                    style={styles.titleseccion}
                    source={require('../Img/Notificaciones/encabezado-notificaciones.png')}
                />

                <View style={styles.menuSection}>
                    <Text style={{color:'#FFFFFF'}}>Cargando notificaciones...</Text>
                </View>
            </SafeAreaView>
        );
    }

    _renderNotificationsList(item) {
        return (
            <TouchableOpacity onPress={() => this._gotoNotificationItem(item)}>
                <View>
                    <Image
                        style={styles.notificationItemImage}
                        source={{uri: item.imagen}}
                    />
                    <Text style={styles.notificationTitle}>
                        {item.titulo}{"\n"}
                        <Text style={styles.notificationMicroResume}>
                            {item.categoria}
                        </Text>
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    _gotoNotificationItem(notification) {
        this.props.navigation.navigate('NotificionesDetalle', {notification: notification})
    }

    render(){
        if(!this.state.isLoading) {
            return this._renderLoadingDataView()
        }
        else {
            return (
                <SafeAreaView style={styles.safeArea}>
                    <HeaderInterno
                        onPress = {() => this.props.navigation.goBack()}
                    />
                    <Image
                        style={styles.titleseccion}
                        source={require('../Img/Notificaciones/encabezado-notificaciones.png')}
                    />
                    <View style={styles.menuSection}>
                        <View style={styles.contentSection}>
                            <ScrollView bounces={true}>
                                <ListView
                                    dataSource={this.state.dataNotifications}
                                    renderRow={this._renderNotificationsList.bind(this)}
                                    enableEmptySections={true}
                                    style={styles.listNotifications}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>
            );
        }
    }
}

{/*
<TouchableHighlight
	onPress={this._onPress}
	style={HomeStyle.touchableMargins}>
	<ImageBackground
		source={this.props.source}
	    style={HomeStyle.backgroundItemList}>
		<View style={HomeStyle.halfItemContainer}></View>
		<ImageBackground
			source={require('../../media/global/gradiant.png')}
			style={HomeStyle.ListItemImageHalf}>
			<Text style={HomeStyle.slideTitle}>{this.props.obra}</Text>
			<Text style={HomeStyle.slideDetail}>{this.props.teatro}</Text>
			<Text style={HomeStyle.slideDetail}>{this.props.hora}</Text>
		</ImageBackground>
	</ImageBackground>
</TouchableHighlight>
*/}

const styles = StyleSheet.create({

    titleseccion:{
        width: totalWidth,
        height: heightTitle,
    },

    menuSection:{
        left: 0,
        //justifyContent: 'center',
        height: heightMenuSection,
    },

    listNotifications: {
        //height: totalHeight - heightList,
        height : heightMenuSection,
    },

    notificationItemImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.55555,
        width: totalWidth
    },

    notificationTitle: {
        padding: 20,
      	backgroundColor: '#036666',
      	color: '#ffffff',
      	fontWeight: 'bold',
    },

    notificationMicroResume: {
        fontWeight: 'normal',
    },

    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    }
});

export default Notificaciones
