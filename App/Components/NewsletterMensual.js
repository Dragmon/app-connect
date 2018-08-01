import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import SectionArrayNewsMonthly from './SectionArrayNewsMonthly';
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
    totalHeight,
    totalWidth,
    heightTitle,
    heightMenuSection
} from '../api/shared';

import { NavigationActions } from 'react-navigation';
/*
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
*/
var api = require('../api/api');


class NewsletterMensual extends Component{
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
    api.getMonthlyNewsletter().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
      this.setState({
        isLoading: false
      })
    })
  };

  handleResponse(jsonRes){
      // jsonRes.push(jsonRes[0]);
      // jsonRes.push(jsonRes[1]);
      // console.log('tatan: ', jsonRes)
    this.setState({newsletterMensualArray: jsonRes});
  };

  render(){

    return(
      <SafeAreaView style={styles.safeArea}>
          <HeaderInterno
              onPress = {() => this.props.navigation.goBack()}
          />
          <Image
              style={styles.titleseccion}
              source={require('../Img/afiches/encabezado-afiches.png')}
          />

          <View style={styles.contentInfo}>
              <SectionArrayNewsMonthly newsletterMensualArray={this.state.newsletterMensualArray} nav={this.props.navigation}/>
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    contentInfo:{
        //flex: 1,
        height: heightMenuSection,
        //position: 'absolute',
        //top: Platform.OS === 'ios' ? (totalHeight * .185) : 0,
        //top: '12.4%',
        //left: 0,
        //flexDirection: 'row',
        //justifyContent: 'center',
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

export default NewsletterMensual
