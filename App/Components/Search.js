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
    TouchableHighlight, ListView
} from 'react-native'
const api = require('../api/api');
var totalHeight = Dimensions.get('window').height;
var toatlWidth = Dimensions.get('window').width;
var aspectRatio = totalHeight/toatlWidth;

class Search extends Component{

    constructor(props){
        super(props);
        this.state ={
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
            .getSearch(dataSearch)
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
        console.log(this.state.dataPresentations)
    }

    render(){
        return(
            <SafeAreaView style={styles.contmenu}>
                <View style={styles.contSearch}>
                    <TextInput
                        placeholder={'Buscar por Título'}
                        placeholderTextColor={'#808080'}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={dataSearch => this.setState({dataSearch})}
                        style={styles.textsearch}
                    />
                    <View style={styles.buttonSearch}>
                        <TouchableHighlight onPress={() => this._getValueSearch()}>
                            <Text style={styles.textButton}>
                                Search
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.contInfoSearch}>

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
        width: toatlWidth - 50,
        borderWidth: 1,
        borderColor: '#4084ff',
        backgroundColor:'#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        fontSize:20,
        textAlign: 'center',
    },
    tounchButton:{
        alignItems: 'center',
        marginTop: 5,
    },
    buttonSearch:{
        backgroundColor: '#FFF',
        width: toatlWidth - 100,
        borderRadius: 5,
        //alignItems: 'center',
        marginTop: 5,
    },
    textButton:{
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default Search
