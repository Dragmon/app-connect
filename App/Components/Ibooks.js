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
    Platform
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
let heightCont = totalHeight*.25;
let widhtCont = totalWidth*.45;
let topSection = totalHeight * .130;

const api = require('../api/api');

const   dirs = RNFetchBlob.fs.dirs,
    extencion = '.ibooks';

class Ibooks extends Component{
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
            imgdownload : require('../Img/ibooks/ver-ibook.png'),
        }
    }

    componentWillMount() {
        api
            .getIbooks()
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

                <View style={styles.containerTitle}>
                    <Text style={styles.sectionTitleText}>Ibooks</Text>
                </View>

                <View style={styles.contBackgroundImage}>
                    <Image
                        style={{flex: 1,}}
                        source={require('../Img/General/background_pattern.png')}
                    />
                </View>

                <View style={styles.menuSection}>
                    <Text>Cargando ibooks...</Text>
                </View>
            </SafeAreaView>
        );
    }

    _renderPresentationsList(item) {
        //console.log("valor del item: ", item)

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
                            Ver {item.categoria} - {item.fecha}
                        </Text>
                    </Text>
                    <Image
                        //source={require('../Img/ibooks/descarga-ibook.png')}
                        source={this.state.imgdownload}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    _showPresentation(presentation) {
        let urldownload = presentation.url;
        let namefile = presentation.titulo;
        let dirfile = dirs.DocumentDir + '/'+ 'ibooks' +'/'+ namefile + extencion;

        console.log("dirfile : " , dirfile);
        console.log("urldonwload : ",urldownload);

        this.setState({
            imgdownload : require('../Img/ibooks/descarga-ibook.png')
        })

        /* Descarga del archivo si no existe*/


        RNFetchBlob.fs.exists(dirfile)
            .then((exist) => {
                if (!exist){
                    Alert.alert(
                        'Descarga de Ibook',
                        'La descarga del ibook a comenzado'
                    )

                    RNFetchBlob
                        .config({
                            // add this option that makes response data to be stored as a file,
                            // this is much more performant.
                            fileCache : true,
                            //appendExt : 'ibooks',
                            path: dirfile
                        })
                        .fetch('GET', urldownload, {
                            //some headers ..
                        })
                        // listen to download progress event
                        .progress((received, total) => {
                            console.log('progress', received / total * 100)
                        })
                        .then((res) => {
                            // the temp file path
                            RNFetchBlob.ios.previewDocument(dirfile)
                                .catch((err) => {
                                    console.log("error ", err)
                                })
                            console.log('The file saved to ', res.path())
                            this.setState({
                                imgdownload : require('../Img/ibooks/ver-ibook.png')
                            })
                        })
                        .catch((err) => {
                            console.log("error ", err)
                        })

                }  else {
                    //RNFetchBlob.ios.previewDocument(dirs.DocumentDir + '/' + namefile + extencion)
                    RNFetchBlob.ios.previewDocument(dirfile)
                        .catch((err) => {
                            console.log("error ", err)
                        })

                    console.log("el archivo ya existe")
                    console.log("ruta del archivo", dirfile)
                }
            })
    };

    render(){
        console.log("height : ",totalHeight);
        console.log("width : ", totalWidth);
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
                        <Text style={styles.sectionTitleText}>Ibooks</Text>
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
        justifyContent: 'center',
        //height: totalHeight * .10,
        height: 30,
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
        marginTop: Platform.OS === 'ios' ? (totalHeight * .035) : 0,
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
      	backgroundColor: '#e91e53',
      	color: '#ffffff',
      	fontWeight: 'bold',
    },

    presentationMicroResume: {
        fontWeight: 'normal',
    },
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    }
});

export default Ibooks
