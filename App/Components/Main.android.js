import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import Header from './Header';
import Body from './Body';
import Search from './Search';
import Footer from './Footer';
import api from '../api/api';

import {
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Alert,
    AlertIOS,
    SafeAreaView,
    PushNotificationIOS,
    NetInfo
} from 'react-native';
import BodyTablet from "./Body-tablet";

import {
    totalWidth,
    totalHeight,
    aspectRatio
} from '../api/shared';

//var totalWidth = Dimensions.get('window').width;
//var totalHeight = Dimensions.get('window').height;
var slideMenudisplace = totalWidth*.90;
var heightHeader = totalHeight *.10;

export default class App extends Component<{}> {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            hideViewImage : aspectRatio == 1.3 ? true : aspectRatio == 1.4 ? true : false,
        }
        console.log("hideViewImage : ", this.state.hideViewImage);
    }


    static navigationOptions = {
        header: null,
    }

    toggle(){
        this.setState({
        isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <SideMenu
                    menu={<Search navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>}
                    isOpen={this.state.isOpen}
                    openMenuOffset={slideMenudisplace}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <Header
                        style={styles.containerHeader}
                        navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>
                    {
                        this.state.hideViewImage == false ?
                            <Body
                                style={styles.containerBody}
                                navigation={this.props.navigation} />
                            :
                            <BodyTablet
                                style={styles.containerBody}
                                navigation={this.props.navigation} />
                    }
                    {/*
                    <Body
                        style={styles.containerBody}
                        navigation={this.props.navigation} />
                    */}
                    <Footer
                        style={styles.containerFooter}
                    />
                </SideMenu>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B323A',
        //height: totalHeight,
        flexDirection: 'column',
    },
    containerHeader:{
        //height: heightHeader,
        //flex: 1,
        //backgroundColor: '#2196F3',
    },
    containerBody:{
        //flex: 8,
        //backgroundColor: '#8BC34A',
        //flexDirection: 'column',
    },
    containerFooter:{
        //height: heightHeader,
        //flex: 1,
        //backgroundColor: '#e3aa1a',
    }
/*
    container1:{
        flex: 1,
        backgroundColor: '#b9a8e3',
    },
    container2:{
        flex: 2,
        backgroundColor: '#8daae3',
    },
*/
});
