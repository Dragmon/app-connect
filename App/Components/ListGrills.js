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

import {
    totalHeight,
    totalWidth,
    heightTitle,
    heightMenuSection
} from '../api/shared';

/*
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .130;
var heightHeader = totalHeight *.20;
*/

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
            }),
            imageHeaderUrl : '',
        }
        this.passProps = this.props.navigation.state.params;
    }

    componentWillMount() {
        api
            .getParrilla(this.passProps.origin)
            .then((response) => this.handleResponse(response))
            .catch((rejection) => { this.setState({ isLoading: false }) })
        this.imageHeaderLoad();
    }

    handleResponse(response) {
        this.setState({
            isLoading: true,
            dataPresentations: this.state.dataPresentations.cloneWithRows(response)
        })
    }

    imageHeaderLoad(){
        switch(this.passProps.origin){
            case 'networks':
                this.setState({
                    imageHeaderUrl : require('../Img/Parrillas/encabezado-networks.png')
                })
                break;
            case 'regional':
                this.setState({
                    imageHeaderUrl : require('../Img/Parrillas/encabezado-regional.png')
                })
                break;
            case 'tvpaga':
                this.setState({
                    imageHeaderUrl : require('../Img/Parrillas/encabezado-paga.png')
                })
                break;
            case 'tvabierta':
                this.setState({
                    imageHeaderUrl : require('../Img/Parrillas/encabezado-abierta.png')
                })
                break;
            default:
                this.setState({
                    imageHeaderUrl : require('../Img/Parrillas/encabezado-parrillas.png')
                })
                break;

        }
    }

    _renderLoadingDataView() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                />
                <Image
                    style={styles.titleseccion}
                    //source={require('../Img/Presentaciones/encabezado-presentaciones.png')}
                    //source={ImageHeader.imagesheader.networks}
                    source={this.state.imageHeaderUrl}
                />

                <View style={styles.menuSection}>
                    <Text style={{color:'#FFFFFF'}}>Cargando parrilla...</Text>
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
                        //source={require('../Img/Presentaciones/encabezado-presentaciones.png')}
                        source={this.state.imageHeaderUrl}
                    />
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
    menuSection:{
        left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        height: heightMenuSection,
    },

    listPresentations: {
        //height: totalHeight - heightHeader,
        height: heightMenuSection - 30,
    },

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
        height: heightTitle,
    },
});

export default Presentaciones
