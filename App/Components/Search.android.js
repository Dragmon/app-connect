import React, {Component} from 'react';
import {
    Button,
    Dimensions,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform,
    NativeModules,
    TouchableHighlight,
    ListView,
    ScrollView,
    Alert
} from 'react-native'

import {
    totalWidth,
    totalHeight,
    heightMenuSection
} from '../api/shared';

const api = require('../api/api');
const urldomain = 'https://adminconnect.televisaventas.tv/global/';
/*
var totalHeight = Dimensions.get('window').height;
var toatlWidth = Dimensions.get('window').width;
var aspectRatio = totalHeight/toatlWidth;
*/

class SearchIos extends Component{

    constructor(props){
        super(props);
        this.myTextInput = React.createRef();
        this.state ={
            isLoading:false,
            dataSearch: " ",
            dataPresentations: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2
            }),
        }
        console.log("estado inicial de busqueda : ",this.state.dataSearch);
    }

    _getValueSearch = () =>{
        const {dataSearch} = this.state;
        console.log("valor del textinput: ", dataSearch);
        api
            .getSearchAndroid(dataSearch)
            .then((response) => this.handleResponse(response))
            .catch((error) => {
                console.log(error)
                this.setState({ isLoading: false })
            })
    }
    _getCleanSearch = () =>{
        this.setState({
            dataSearch: "",
        })
        const {dataSearch} = this.state.dataSearch;
        api
            .getSearchIOS(dataSearch)
            .then((response) => this.handleResponse(response))
            .catch((error) => {
                console.log(error)
                this.setState({ isLoading: false })
            })
    }

    handleResponse(response) {
        this.setState({
            isLoading: true,
            dataPresentations: this.state.dataPresentations.cloneWithRows(response)
        })
        console.log("llamado a la funcion handleResponse")
        console.log(this.state.dataPresentations)
    }

    _renderPresentationsList(item) {
        return (
            <TouchableOpacity onPress={() => this._showListSeacrh(item)}>
                <View>
                    <Image
                        style={styles.presentationItemImage}
                        source={{uri: item.imagen}}
                    />
                    <Text style={styles.presentationTitle}>
                        {item.titulo}{"\n"}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    _showListSeacrh(item) {
        switch (item.slug) {
            case 'videos' :
                this.props.navigation.navigate('ShowVideo', {video: item})
                break;
            case 'hot-results' :
                let data = [urldomain.concat(item.url), item.titulo];
                this.props.navigation.navigate('ImageView', {data: data})
                break;
            case 'envios-cliente' :
            case 'news-mensual' :
                item.url = urldomain.concat(item.url);
                this.props.navigation.navigate('NewsletterDetail', {detail: item})
                break;
            case 'presentaciones' :
            case 'circulares' :
            case 'parrillas-regional':
            case 'parrillas-networks':
            case 'parrillas-abierta':
            case 'parrillas-paga':
            case 'catalogos-android':
            case 'data15':
                this.props.navigation.navigate('ShowPresentation', {presentation: item})
                break;
            default:
                Alert.alert(
                    'Este contenido no puede ser abierto por el momento'
                )
        }
    }

    render(){
        return(
            <SafeAreaView style={styles.contmenu}>
                <View style={styles.contSearch}>
                    <TextInput
                        //placeholder={'Buscar por Título'}
                        placeholderTextColor={'#808080'}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={dataSearch => this.setState({dataSearch})}
                        value={this.state.dataSearch}
                        underlineColorAndroid={'transparent'}
                        style={styles.textsearch}
                    />
                    <View style={styles.buttonContent}>
                        <View style={styles.buttonSearch}>
                            <TouchableHighlight onPress={() => this._getValueSearch()}>
                                <Text style={styles.textButton}>
                                    Buscar
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonClean}>
                            <TouchableHighlight onPress={() => this._getCleanSearch()}>
                                <Text style={styles.textButton}>
                                    Limpiar
                                </Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>
                <View style={styles.menuSection}>
                    <View style={{height: totalHeight - 120}}>
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
        )
    }
}

const styles = StyleSheet.create({
    contmenu:{
        flex: 1,
    },
    contSearch:{
        alignItems: 'center',
    },
    textsearch:{
        height: 30,
        width: totalWidth - 50,
        borderWidth: 1,
        borderColor: '#4084ff',
        backgroundColor:'#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        fontSize:20,
        textAlign: 'center',
        paddingBottom: 5,
        paddingTop: 5,
    },
    buttonContent:{
        flexDirection: 'row',
    },
    tounchButton:{
        alignItems: 'center',
        marginTop: 5,
    },
    buttonSearch:{
        backgroundColor: '#e91e53',
        width: (totalWidth - 60)/2,
        borderRadius: 5,
        marginTop: 5,
        marginRight: 5,
    },
    buttonClean:{
        backgroundColor: '#e91e53',
        width: (totalWidth - 60)/2,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: 5,
    },
    textButton:{
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#FFF',
    },
    menuSection:{
        left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        height: heightMenuSection,
        marginTop: 10,
        width: totalWidth *.90,
    },

    contInfoSearch:{
        marginTop: 5,
        height: totalHeight,
    },

    presentationItemImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.55555,
        width: totalWidth *.90,
        marginBottom: -2,
    },
    presentationTitle: {
        paddingTop: Platform.OS === 'ios' ? 20 : 10,
        paddingBottom: Platform.OS === 'ios' ? 0 : 5,
        paddingLeft: 15,
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        backgroundColor: '#e91e53',
        color: '#ffffff',
        fontWeight: 'bold',
    },
})

export default SearchIos
