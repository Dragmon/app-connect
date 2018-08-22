import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Linking,
    Platform
} from 'react-native';

let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
let marginFooter = (totalHeight * .015);
let widthImgFooter = (totalWidth * .10);
var heightImg = ((totalWidth / 6.5) * 0.5130);
var widthImg =  (totalWidth / 6.5);
var heightImgRat = ((totalWidth / 4.5) * 0.5130);
var widthImgRat =  (totalWidth / 4.5);
var heightFooter = totalHeight *.10;
var footerAndRat19 = totalHeight *.15;

class Footer extends Component{
    render(){
        return(
            <SafeAreaView style={styles.safearea}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://televisaventas.tv/')}>
                        <Image
                            style={styles.imgFooter}
                            source={require('../Img/footer/logo_footer.png')}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

};

var styles = StyleSheet.create({
    footer: {
        backgroundColor: '#1B323A',
        alignItems: 'center',
        //marginTop: marginFooter,
        //marginBottom: marginFooter,
    },
    safearea:{
        //flex: 1,
        backgroundColor: '#1B323A',
        //height: heightFooter,
        ...Platform.select({
            ios:{
                height: heightFooter,
            },
            android:{
                marginTop: 3,
                height: aspectRatio == 1.9 ? footerAndRat19 : heightFooter,
            }
        }),
    },
    imgFooter:{
        resizeMode : 'contain',
        ...Platform.select({
            android:{
                marginTop: 3,
                height: aspectRatio == 1.9 ? heightImgRat :heightImg,
                width: aspectRatio == 1.9 ? widthImgRat : widthImg,
            }
        }),
    }
});

export default Footer;