import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

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
        paddingTop: 6,
        paddingBottom: 6,
    },
    safearea:{
        flex: 1,
        backgroundColor: '#1B323A'
    }
});

export default Footer;