import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
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

import { NavigationActions } from 'react-navigation';

/*
var totalHeiHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeiHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeiHeight * .200;
var topSectionTwo = totalHeiHeight * .450;
*/

class Parrillas extends Component{

  static navigationOptions = {
    header: null,
  };

  openParrillaNetworks(){
  	Browser.open(api.getParrillaNetworksUrl(),{
      showUrlWhileLoading: false,
  		showPageTitles: false,
	  	hideWebViewBoundaries: true,
    	doneButtonTitle: 'Cerrar'
    });
  }

  render(){

    const{navigate} = this.props.navigation;
    const pdfregional = "parrilla/parrillaregional.pdf";
    const pdfabierta = "parrilla/parrillaabierta.pdf";
    const excelpaga = "parrilla/parrillapaga.xlsx";
    const excelnetworks = "parrilla/parrillanetworks.xlsx";

    return(
      <SafeAreaView style={styles.safeArea}>
          <HeaderInterno
              onPress = {() => this.props.navigation.goBack()}
          />
          <Image
              style={styles.titleseccion}
              source={require('../Img/Parrillas/encabezado-parrillas.png')}
          />
          <View style={styles.contParrilla}>
              <View style={styles.menuSection}>
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ExcelView',{origin:excelnetworks})}>
                      <View style={styles.imageContentSection}>
                          <Image
                              source={require('../Img/Parrillas/icono-networks.png')}
                          />
                      </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PdfView',{origin:pdfregional})} >
                      <View style={styles.imageContentSection}>
                          <Image
                              source={require('../Img/Parrillas/icono-regional.png')}
                          />
                      </View>
                  </TouchableHighlight>
              </View>

              <View style={styles.menuSection}>
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PdfView',{origin:pdfabierta})}>
                      <View style={styles.imageContentSection}>
                          <Image
                              source={require('../Img/Parrillas/icono-abierta.png')}
                          />
                      </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ExcelView',{origin:excelpaga})}>
                      <View style={styles.imageContentSection}>
                          <Image
                              source={require('../Img/Parrillas/icono-paga.png')}
                          />
                      </View>
                  </TouchableHighlight>
              </View>
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    imageContentSection:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menuSection:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
        height: heightTitle,
    },
    contParrilla:{
        //height: heightMenuSection - 30,
        height: heightMenuSection
    },
});

export default Parrillas
