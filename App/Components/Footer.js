import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Linking
} from 'react-native';

let totalHeight = Dimensions.get('window').height;
let totalWidth = Dimensions.get('window').width;
let marginFooter = (totalHeight * .015);
let widthImgFooter = (totalWidth * .10);
//var heightFooter = totalHeight *.15;
var heightFooter = totalHeight *.10;

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
        height: heightFooter,
    },
    imgFooter:{
        resizeMode : 'contain',
    }
});

export default Footer;