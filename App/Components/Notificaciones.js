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
    Platform
} from 'react-native';

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .130;

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
                />

                <View style={styles.containerTitle}>
                    <Text style={styles.sectionTitleText}>Notificaciones</Text>
                </View>

                <View style={styles.contBackgroundImage}>
                    <Image
                        style={{flex: 1,}}
                        source={require('../Img/General/background_pattern.png')}
                    />
                </View>

                <View style={styles.menuSection}>
                    <Text>Cargando notificaciones...</Text>
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
                            {item.categoria} - {item.fecha}
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

                    <View style={styles.containerTitle}>
                        <Text style={styles.sectionTitleText}>Notificaciones</Text>
                    </View>

                    <View style={styles.contBackgroundImage}>
                        <Image
                            style={{flex: 1,}}
                            source={require('../Img/General/background_pattern.png')}
                        />
                    </View>

                    <View style={styles.menuSection}>
                        <View style={{height: totalHeight}}>
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

const styles = StyleSheet.create({
    containerTitle:{
        flexDirection: 'row',
        backgroundColor: '#E44858',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 100 : 0,
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
        left: 0,
        top: topSection,
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingLeft: '5%'
    },

    listNotifications: {},

    notificationItemImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.55555,
        width: totalWidth
    },

    notificationTitle: {
        padding: 20,
      	backgroundColor: '#f68934',
      	color: '#ffffff',
      	fontWeight: 'bold',
    },

    notificationMicroResume: {
        fontWeight: 'normal',
    },

    safeArea:{
        flex:1,
    }
});

export default Notificaciones
