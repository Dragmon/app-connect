import React, {Component} from 'react';
//import Browser from 'react-native-browser';
//import { Button } from 'react-native-elements'
import{
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
    TouchableHighlight
} from 'react-native'
var totalHeight = Dimensions.get('window').height;
var toatlWidth = Dimensions.get('window').width;
var aspectRatio = totalHeight/toatlWidth;

class Search extends Component{

    render(){
        return(
            <SafeAreaView style={styles.contmenu}>
                <View>
                    <TextInput
                        placeholder={'Buscar'}
                        placeholderTextColor={'#000'}
                        style={styles.textsearch}
                    />
                </View>
                <TouchableHighlight style={styles.tounchButton}>
                    <View style={styles.buttonSearch}>
                        <Text style={styles.textButton}>
                            Search
                        </Text>
                    </View>
                </TouchableHighlight>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    contmenu:{
        flex: 1,
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
    },
    tounchButton:{
        alignItems: 'center',
        marginTop: 5,
    },
    buttonSearch:{
        backgroundColor: '#FFF',
        width: toatlWidth - 100,
        borderRadius: 5,
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
