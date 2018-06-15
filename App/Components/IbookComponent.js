import React, { Component } from 'react';
import Dimensions from 'Dimensions';
var api = require('../api/api');
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicatorIOS,
    Image,
    StatusBar,
    ListView,
    ScrollView,
    AlertIOS,
    NativeModules
} from 'react-native';
import GoogleAnalytics from 'react-native-google-analytics-bridge';

var DocumentController = NativeModules.DocumentController;

var RNFS = require('react-native-fs');
var ibooksDirPath= RNFS.DocumentDirectoryPath + '/ibooks';
var jobDownloadId = -1;

var totalWidth = Dimensions.get('window').width;
var totalHeiHeight = Dimensions.get('window').height;
var titleConfig = {
    title: 'Connect',
    tintColor: 'white'
};
var styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    homeBlock:{
        height: totalHeiHeight*.15,
        width: totalWidth*.999999999999
    },
    titleBlock:{
        height: totalHeiHeight*.07,
        width: totalWidth*.999999999999
    },
    imageContainer:{
        height: totalHeiHeight*.90,
        width: totalWidth*.999999999999
    },
    leftNavBarButton: {
        top: totalHeiHeight*.02,
        width: totalWidth*.07,
        height: totalHeiHeight*.04,
        left: 10
    },
    rightNavBarButton: {
        top: totalHeiHeight*.019,
        width: totalWidth*.09,
        height: totalHeiHeight*.04,
        right: 10
    },
    horizontalHomeBlock:{
        flexDirection: 'row',
        height: totalHeiHeight*.15,
        width: totalWidth*.999999999999999
    },
    horizontalImageSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalHeiHeight*.15,
        width: totalWidth*.3333,
        backgroundColor: 'black'
    },
    iBooksRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.555555,
        width: totalWidth
    },
    imageContentSection:{
        flexDirection: 'column',
        justifyContent: 'center'
    },
    sectionTitle:{
        flexDirection: 'row',
        width: totalWidth,
        height: totalHeiHeight * .06,
        backgroundColor: '#E44858',
        justifyContent: 'center'
    },
    sectionTitleText:{
        flexDirection: 'column',
        alignSelf: 'center',
        color: 'white'
    },
    backgroundImageView:{
        width: totalWidth,
    },
    textInformation:{
        padding: 20,
        justifyContent: 'center',
        textAlign:'center',
        color:'#444',
    },
    listView:{
    },
    ibookMeta:{
        padding: 20,
        backgroundColor: '#f68934',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    ibookSub:{
        fontWeight: 'normal',
    }
});

class IBooksComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded:false,
        }
    }
    componentWillMount(){
        api.getIbooks().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
            this.setState({
                loaded: false
            })
        })
    }

    handleResponse(jsonRes){
        var ibooExists = false;
        //console.log("Printing API CALL::", jsonRes);
        dataUpdated = jsonRes;
        for (var i=0; i<dataUpdated.length; i++) {
            ibookName = dataUpdated[i].id +'.ibooks';
            ibookDestination = ibooksDirPath + '/' + ibookName;
            dataUpdated[i].status = '';
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dataUpdated),
            dataSourceCopy: dataUpdated,
            loaded: true
        })
    }

    _renderLoadingView() {
        return (
            <View>
                <Text>Cargando iBooks...</Text>
            </View>

        );
    }

    _ibookDownload(ibook){
        ibookName = ibook.id +'.ibooks';
        ibookDestination = ibooksDirPath + '/' + ibookName;
        existFile = false;
        this.setState({ loaded:false })
        console.log(ibookDestination);
        RNFS.exists(ibookDestination).then(exists => {
            existFile = exists;
            console.log(existFile);
            if(existFile && jobDownloadId===-1){
                //Termino la descarga
                GoogleAnalytics.trackEvent('APP', 'iBook descargado', {titulo: ibook.titulo});
                this.setState({ loaded:false })
                dataUpdated = this.state.dataSourceCopy;
                for (var i=0; i<dataUpdated.length; i++) {
                    if(dataUpdated[i] == ibook){
                        dataUpdated[i].status = 'Archivo descargado. Clic para abrir.';
                    }
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataUpdated),
                    dataSourceCopy: dataUpdated,
                    loaded:true
                })
                url = ibookDestination;
                console.log(url);
                DocumentController.show({
                    file: url
                });
            }else{
                //Descargamos el archivo
                if(jobDownloadId===-1){
                    GoogleAnalytics.trackEvent('APP', 'Inicia la descarga del iBook', {titulo: ibook.titulo});
                    AlertIOS.alert('Descargar iBook','Ha comenzado la descarga de tu iBook. Éste proceso puede demorar mucho tiempo dependiendo de tu conexión a Internet. Si deseas detener la descarga vuelve a dar clic sobre el iBook que has descargado.');
                    this.setState({ currentIbook:ibookDestination })
                    RNFS.mkdir(ibooksDirPath).then(success => {
                        var progress = data => {
                            var percentage = data.bytesWritten / data.contentLength;
                            var text = `Progress ${percentage}%`;
                            //this.setState({ output: text });
                            console.log(text);
                        };

                        var begin = res => {
                            jobDownloadId = res.jobId;
                        };
                        var progressDivider = 2;
                        var background = true;


                        RNFS.downloadFile({ fromUrl: ibook.url, toFile: ibookDestination, begin, progress, background, progressDivider }).then(res => {
                            console.log(res);
                        }).then(content => {
                            //Termino la descarga
                            GoogleAnalytics.trackEvent('APP', 'Terminó la descarga del iBook', {titulo: ibook.titulo});
                            this.setState({ loaded:false })
                            dataUpdated = this.state.dataSourceCopy;
                            for (var i=0; i<dataUpdated.length; i++) {
                                if(dataUpdated[i] == ibook){
                                    dataUpdated[i].status = 'Archivo descargado. Clic para abrir.';
                                }
                            }
                            this.setState({
                                dataSource: this.state.dataSource.cloneWithRows(dataUpdated),
                                dataSourceCopy: dataUpdated,
                                loaded:true
                            })
                            AlertIOS.alert('Descargar iBook','Se ha finalizado la descarga. Selecciona la opción Copiar a iBooks para ver el iBook.');
                            jobDownloadId = -1;
                            console.log('Descarga finalizada');
                            url = ibookDestination;
                            console.log(url);
                            DocumentController.show({
                                file: url
                            });
                        }).catch(err => this.showError(err));

                    }).catch(err => this.showError(err));
                }else{
                    //Detenemos la descarga
                    GoogleAnalytics.trackEvent('APP', 'Se ha cancelado la descarga del iBook', {titulo: ibook.titulo});
                    this.setState({ loaded:false })
                    dataUpdated = this.state.dataSourceCopy;
                    for (var i=0; i<dataUpdated.length; i++) {
                        dataUpdated[i].status = '';
                    }
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(dataUpdated),
                        dataSourceCopy: dataUpdated,
                        loaded:true
                    })
                    RNFS.stopDownload(jobDownloadId);
                    jobDownloadId = -1;
                    RNFS.unlink(this.state.currentIbook).then(success => {
                        var text = success.toString();
                        console.log(text);
                    }).catch(err => console.log(err));
                    AlertIOS.alert('Descargar iBook','Se ha detenido la descarga.');
                }
            }
        });

        //Actualizamos el data source
        dataUpdated = this.state.dataSourceCopy;
        for (var i=0; i<dataUpdated.length; i++) {
            if(dataUpdated[i] == ibook){
                dataUpdated[i].status = 'Descargando...';
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dataUpdated),
            dataSourceCopy: dataUpdated,
            loaded:true
        })
    }



    _renderIBook(ibook){
        return(
            <TouchableOpacity onPress={ () => this._ibookDownload(ibook) }>
                <View>
                    <Image source={{uri:ibook.imagen}} style={styles.iBooksRow}>
                    </Image>
                    <Text style={styles.ibookMeta}>{ibook.titulo}{"\n"}
                        <Text style={styles.ibookSub}>Ver iBook{"\n"}</Text>
                        <Text style={styles.ibookSub}>{ ibook.status }</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        if(!this.state.loaded){
            return this._renderLoadingView();
        }else{
            return(
                <View style={{flex:1}}>
                    <ScrollView bounces={true}>
                        <Text style={styles.textInformation}>
                            iBooks es una aplicación para destacar la oferta de Televisa.
                            Se da a la fuerza de ventas para que cuente con información precisa y veraz de
                            metacontenidos y contenidos premium para presentaciones con clientes.
                        </Text>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderIBook.bind(this)}
                            style={styles.listView}
                            enableEmptySections={true}
                        />
                    </ScrollView>
                </View>
            )
        }
    }
};

module.exports = IBooksComponent;
