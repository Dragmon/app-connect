import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Linking,
    Text
} from 'react-native';

let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
let marginFooter = (totalHeight * .015);
let widthImgFooter = (totalWidth * .10);
//var heightFooter = totalHeight *.15;
var heightFooter = totalHeight *.10;

class Footer extends Component{
    render(){
        console.log("url :", this.props.urlnav);
        return(
            <SafeAreaView style={styles.safearea}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => Linking.openURL(this.props.urlnav)}>
                        <Text style={styles.textfooter}>
                            VER MÁS CONTENIDO
                        </Text>
                        {/*
                        <Image
                            style={styles.imgFooter}
                            source={require('../Img/footer/logo_footer.png')}
                        />
                        */}
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

};

var styles = StyleSheet.create({
    footer: {
        backgroundColor: '#e91e53',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        //marginTop: marginFooter,
        //marginBottom: marginFooter,
    },
    safearea:{
        flex: 1,
        backgroundColor: '#e91e53',
        height: heightFooter,
    },
    imgFooter:{
        resizeMode : 'contain',
    },
    textfooter:{
        color: '#FFFFFF',
        fontSize: 20,

    }
});

export default Footer;