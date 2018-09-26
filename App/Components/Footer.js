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
var footerAndRat19 = totalHeight *.10;

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
                marginTop: aspectRatio == 1.9 ? 15 : 3,
                marginBottom: aspectRatio == 1.9 ? -15 : 0,
                height: aspectRatio == 1.9 ? footerAndRat19 : heightFooter,
            }
        }),
    },
    imgFooter:{
        resizeMode : 'contain',
        ...Platform.select({
            //se agrego para tablet ios
            ios:{
                height: aspectRatio == 1.3 ? ((totalWidth / 6) * 0.5130) : ((totalWidth / 4) * 0.5130),
                width:  aspectRatio == 1.3 ? (totalWidth / 6): (totalWidth / 4),
                marginTop: aspectRatio == 1.3 ? 15 : 0,
            },
            //se agrego para tablet ios
            android:{
                marginTop: 3,
                height: aspectRatio == 1.9 ? heightImgRat :heightImg,
                width: aspectRatio == 1.9 ? widthImgRat : widthImg,
            }
        }),
    }
});

export default Footer;