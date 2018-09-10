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
    NativeModules
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
                <Button
                    title={'Search'}
                    color='#FFF'
                />
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
    },
    buttonSearch:{
        backgroundColor: '#FFF'
    },
})

export default Search
