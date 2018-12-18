import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Dimensions,
    Platform,
    TouchableHighlight, TouchableOpacity, Linking
} from 'react-native';

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
var headerAndroid = totalHeight * .05;
var headerAndRat19 = totalHeight * .10;

var heightHeader = (aspectRatio == 2.2 ? totalHeight *.18 : aspectRatio == 1.3 ? totalHeight * .08 : totalHeight *.12);

{/*
const Header = props => (

    <SafeAreaView style={styles.containerheader}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Icon
                name="search"
                color="#ffffff"
                size={aspectRatio == 1.9 ? 25 : aspectRatio == 1.3 ? 28 : 19}
                style={styles.iconbars}
            />
        </TouchableWithoutFeedback>
        <Image
            style={styles.logoApp}
            source={require('../Img/Header/logo-connect.png')}
        />
        <TouchableHighlight onPress={() => navigate('GalleryImages')}>
            <Icon
                name="image"
                color="#ffffff"
                size={aspectRatio == 1.9 ? 25 : aspectRatio == 1.3 ? 28 : 19}
                style={styles.iconbars}
            />
        </TouchableHighlight>
    </SafeAreaView>
)
*/}

class Header extends Component{
    render(){

        const{navigate} = this.props.navigation;

        return(

            <SafeAreaView style={styles.containerheader}>
                <TouchableWithoutFeedback onPress={() => this.props.toggle()}>
                    <Icon
                        name="search"
                        color="#ffffff"
                        size={aspectRatio == 1.9 ? 25 : aspectRatio == 1.3 ? 28 : 19}
                        style={styles.iconbars}
                    />
                </TouchableWithoutFeedback>
                <Image
                    style={styles.logoApp}
                    source={require('../Img/Header/logo-connect.png')}
                />
                <TouchableHighlight onPress={() => navigate('GalleryImages')}>
                    <Icon
                        name="image"
                        color="#ffffff"
                        size={aspectRatio == 1.9 ? 25 : aspectRatio == 1.3 ? 28 : 19}
                        style={styles.iconbars}
                    />
                </TouchableHighlight>
            </SafeAreaView>
        )
    }

};


const styles = StyleSheet.create({
    containerheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1B323A',
        flex: aspectRatio == 2.2 ? 1 : 0,
        ...Platform.select({
            ios:{
                height: heightHeader,
            },
            android:{
                height: aspectRatio == 1.9 ? headerAndRat19 : headerAndroid,
            }
        }),
    },
    iconbars: {
        marginLeft: 10,
        width: totalWidth /10,
    },
    logoTelevisa: {
        marginRight: 10,
    },
    logoApp:{
        /*
        marginLeft: Platform.OS === 'ios' ? (totalWidth * .35) :  (totalWidth * .40),
        width: Platform.OS === 'ios' ? (totalWidth /3) : (totalWidth /5),
        height: Platform.OS === 'ios' ?  ((totalWidth /3) * .2043) : ((totalWidth /5) * .2043),
        */
        ...Platform.select({
            ios:{
                //marginRight: aspectRatio == 1.3 ? (totalWidth * .40) : (totalWidth * .33),
                width: aspectRatio == 1.3 ? (totalWidth /4) : (totalWidth /3),
                height: aspectRatio == 1.3 ? (totalWidth /4) * .2043 : (totalWidth /3) * .2043,
            },
            android:{
                marginRight: aspectRatio == 1.9 ? totalWidth * .33 : totalWidth * .40,
                width: aspectRatio == 1.9 ? totalWidth /3 : totalWidth /5,
                height: aspectRatio == 1.9 ? (totalWidth /3) * .2043 : (totalWidth /5) * .2043,
            },
        }),
    },
});

export default Header
