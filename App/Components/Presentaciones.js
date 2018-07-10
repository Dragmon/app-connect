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
    SafeAreaView,
    Platform,
} from 'react-native';

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .130;

const api = require('../api/api');

class Presentaciones extends Component{
    static navigationOptions = {
        header: null,
        headerMode: null
    };

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            dataPresentations: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2
            })
        }
    }

    componentWillMount() {
        api
            .getPresentations()
            .then((response) => this.handleResponse(response))
            .catch((rejection) => { this.setState({ isLoading: false }) })
    }

    handleResponse(response) {
        this.setState({
            isLoading: true,
            dataPresentations: this.state.dataPresentations.cloneWithRows(response)
        })
    }

    _renderLoadingDataView() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                />
                <Image
                    style={styles.titleseccion}
                    source={require('../Img/Presentaciones/encabezado-presentaciones.png')}
                />
                {/*
                <View style={styles.containerTitle}>
                    <Text style={styles.sectionTitleText}>Presentaciones</Text>
                </View>
                */}
                <View style={styles.contBackgroundImage}>
                    <Image
                        style={{flex: 1,}}
                        source={require('../Img/General/background_pattern.png')}
                    />
                </View>

                <View style={styles.menuSection}>
                    <Text>Cargando presentaciones...</Text>
                </View>
            </SafeAreaView>
        );
    }

    _renderPresentationsList(item) {
        return (
            <TouchableOpacity onPress={() => this._showPresentation(item)}>
                <View>
                    <Image
                        style={styles.presentationItemImage}
                        source={{uri: item.imagen}}
                    />
                    <Text style={styles.presentationTitle}>
                        {item.titulo}{"\n"}
                        <Text style={styles.presentationMicroResume}>
                            {item.categoria} - {item.fecha}
                        </Text>
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    _showPresentation(presentation) {
        this.props.navigation.navigate('ShowPresentation', {presentation: presentation})
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
                        source={require('../Img/Presentaciones/encabezado-presentaciones.png')}
                    />
                    {/*
                    <View style={styles.containerTitle}>
                        <Text style={styles.sectionTitleText}>Presentaciones</Text>
                    </View>
                    */}
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
                                    dataSource={this.state.dataPresentations}
                                    renderRow={this._renderPresentationsList.bind(this)}
                                    enableEmptySections={true}
                                    style={styles.listPresentations}
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
        left: 0,
        top: topSection,
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingLeft: '5%'
        marginTop: Platform.OS === 'ios' ? (totalHeight * .055) : 0,
    },

    listPresentations: {},

    presentationItemImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.55555,
        width: totalWidth
    },

    presentationTitle: {
        padding: 20,
      	backgroundColor: '#1b313a',
      	color: '#ffffff',
      	fontWeight: 'bold',
    },

    presentationMicroResume: {
        fontWeight: 'normal',
    },
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
    },
});

export default Presentaciones
