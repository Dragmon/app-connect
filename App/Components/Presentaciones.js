import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import ButtonsStyles from '../styles/ButtonsStyles';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    ScrollView,
    SafeAreaView,
    Platform,
} from 'react-native';

import {
    totalHeight,
    totalWidth,
    heightTitle,
    heightMenuSection, aspectRatio
} from '../api/shared';

import {downloadFile} from '../api/donwloadfile';

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

                <View style={styles.menuSection}>
                    <Text style={{color:'#FFFFFF'}}>Cargando presentaciones...</Text>
                </View>
            </SafeAreaView>
        );
    }

    _renderPresentationsList(item) {
        return (

            <View>
                <Image
                    style={styles.presentationItemImage}
                    source={{ uri: item.imagen }}
                />
                <Text style={styles.presentationTitle}>
                    {item.titulo}{"\n"}
                </Text>
                <View style={ButtonsStyles.infoDocument}>
                    <TouchableOpacity onPress={() => this._showPresentation(item)}>
                        <View style={ButtonsStyles.buttonView}>
                            <Text style={ButtonsStyles.textButtonDocument}>
                                Ver
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => downloadFile(item)}>
                        <View style={ButtonsStyles.buttonDownload}>
                            <Text style={ButtonsStyles.textButtonDocument}>
                                Descargar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            /*
            <TouchableOpacity onPress={() => this._showPresentation(item)}>
                <View>
                    <Image
                        style={styles.presentationItemImage}
                        source={{uri: item.imagen}}
                    />
                    <Text style={styles.presentationTitle}>
                        {item.titulo}
                    </Text>
                </View>
            </TouchableOpacity>
            */            
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
        height: heightMenuSection,
    },

    presentationItemImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.55555,
        width: totalWidth
    },

    presentationTitle: {
        paddingTop: Platform.OS === 'ios' ? 20 : 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: Platform.OS === 'ios' ? 0 : 10,
      	backgroundColor: '#1b313a',
      	color: '#ffffff',
      	fontWeight: 'bold',
        fontSize: (aspectRatio == 1.3? 20: 15 ),
        marginTop: Platform.OS === 'ios' ? 0 : 0,
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
