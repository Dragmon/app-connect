import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import SectionArrayNewsClients from './SectionArrayNewsClients';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    Alert,
    Image,
    SafeAreaView,
    Platform,
} from 'react-native';

import {
    totalWidth,
    heightTitle,
    heightMenuSection
} from '../api/shared';

import { NavigationActions } from 'react-navigation'

var api = require('../api/api');
/*
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
*/

class NewsletterClientes extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentWillMount(){
    api.getClientsNewsletter().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
      this.setState({
        isLoading: false
      })
    })
  };

  handleResponse(jsonRes){
    this.setState({newsletterClientsArray: jsonRes});
  };

  render(){

    return(
        <SafeAreaView style={styles.safeArea}>
            <HeaderInterno
                onPress = {() => this.props.navigation.goBack()}
            />
            <Image
                style={styles.titleseccion}
                source={require('../Img/detras-estrategia/encabezado-detras.png')}
            />
            <View style={styles.contentInfo}>
                <SectionArrayNewsClients newsletterClientsArray={this.state.newsletterClientsArray} nav={this.props.navigation}/>
            </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    containerTitle:{
        flexDirection: 'row',
        backgroundColor: '#E44858',
        justifyContent: 'center'
    },
    sectionTitleText:{
        fontSize: 15,
        flexDirection: 'column',
        alignSelf: 'center',
        color: 'white'
    },
    contBackgroundImage:{
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    contentInfo:{
        //flex: 1,
        height: heightMenuSection,
    },
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
        height: heightTitle,
    },
});

export default NewsletterClientes
