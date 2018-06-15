import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import NavigationBar from 'react-native-navbar';
import LeftButton from './NavbarMenuLeftBackButtonComponent';
import NavbarTitle from './NavbarMenuTitleComponent';
import RightButton from './NavbarMenuRightButtonComponent';
import IBooksComponent from './IbookComponent';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicatorIOS,
    Image,
    ImageBackground,
    StatusBar
} from 'react-native';
{/*var SlideMenuComponent = require('./SlideMenuComponent');*/}
var totalWidth = Dimensions.get('window').width;
var totalHeiHeight = Dimensions.get('window').height;
var containerHeight = totalHeiHeight *.90;;

var titleConfig = {
    title: 'Connect',
    tintColor: 'white'
};
var styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    homeBlock:{
        height: totalHeiHeight*.15,
        width: totalWidth*.999999999999
    },
    titleBlock:{
        height: totalHeiHeight*.07,
        width: totalWidth*.999999999999
    },
    imageContainer:{
        height: totalHeiHeight*.90,
        width: totalWidth*.999999999999
    },
    leftNavBarButton: {
        top: totalHeiHeight*.02,
        width: totalWidth*.07,
        height: totalHeiHeight*.04,
        left: 10
    },
    rightNavBarButton: {
        top: totalHeiHeight*.019,
        width: totalWidth*.09,
        height: totalHeiHeight*.04,
        right: 10
    },
    horizontalHomeBlock:{
        flexDirection: 'row',
        height: totalHeiHeight*.15,
        width: totalWidth*.999999999999999
    },
    horizontalImageSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalHeiHeight*.15,
        width: totalWidth*.3333,
        backgroundColor: 'black'
    },
    imageContentSection:{
        flexDirection: 'column',
        justifyContent: 'center'
    },
    sectionTitle:{
        flexDirection: 'row',
        width: totalWidth,
        height: totalHeiHeight * .06,
        backgroundColor: '#E44858',
        justifyContent: 'center'
    },
    sectionTitleText:{
        flexDirection: 'column',
        alignSelf: 'center',
        color: 'white'
    },
    backgroundImageView:{
        width: totalWidth,
        height: containerHeight,
    },
});
class IBookMainContainerComponent extends React.Component{
    goBack(){
        this.props.navigator.pop({
        })
    }
    render() {
        {/*const menu = <SlideMenuComponent navigator={navigator}/>;*/}
        return (
            <View>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <NavigationBar
                    title={<NavbarTitle/>}
                    style={styles.titleBlock}
                    leftButton={
                        <LeftButton
                            style={[styles.leftNavBarButton]}
                            onPress={ () => this.goBack()} />}
                    rightButton={
                        <RightButton
                            style={styles.rightNavBarButton}
                        />
                    }
                    tintColor="#3581BC"
                />
                <View>
                    <View>
                        <ImageBackground source={require('../Img/General/background_pattern.png')} style={styles.backgroundImageView}>
                            <View style={styles.sectionTitle}>
                                <Text style={styles.sectionTitleText}>iBooks</Text>
                            </View>
                            <IBooksComponent/>
                        </ImageBackground>
                    </View>
                </View>
            </View>

        );
    }
};

module.exports = IBookMainContainerComponent;
