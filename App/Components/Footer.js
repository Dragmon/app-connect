import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native';

let totalHeight = Dimensions.get('window').height;

class Footer extends Component{
    render(){
        return(
            <SafeAreaView style={styles.safearea}>
                <View style={styles.footer}>
                    <Image
                        source={require('../Img/footer/logo_footer.png')}
                    />
                </View>
            </SafeAreaView>
        )
    }

};

var styles = StyleSheet.create({
    footer: {
        backgroundColor: '#1B323A',
        alignItems: 'center',
        paddingTop: (totalHeight * .015),
        paddingBottom: (totalHeight * .015),
    },
    safearea:{
        flex: 1,
        backgroundColor: '#1B323A'
    }
});

export default Footer;