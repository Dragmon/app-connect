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
import { NavigationActions } from 'react-navigation';

var totalHeiHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var widhtCont = totalWidth/2;
var topSection = totalHeiHeight * .186;


class Networks extends Component{

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
    const mapanetworks = "mapa/mapanetworks.pdf"

    return(
      <SafeAreaView style={styles.safeArea}>
          <HeaderInterno
              onPress = {() => this.props.navigation.goBack()}
          />

          <Image
              style={styles.titleseccion}
              source={require('../Img/Networks/encabezado-networks.png')}
          />
          {/*
          <View style={styles.containerTitle}>
            <Text style={styles.sectionTitleText}>Networks</Text>
          </View>

          <View style={styles.contBackgroundImage}>
              <Image
                  style={{flex: 1}}
                  source={require('../Img/General/background_pattern.png')}
              />
          </View>
          */}
          <View style={styles.menuSectionTwo}>
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ExcelView',{origin:excelnetworks})}>
                  <View style={styles.menuOption}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Networks/icono-parrilla.png')}
                      />
                  </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PdfView',{origin:mapanetworks})}>
                  <View style={styles.menuOption}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Networks/icono-mapa.png')}
                      />
                  </View>
              </TouchableHighlight>
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    /*
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
  horizontalImageSection:{
   flexDirection: 'row',
   justifyContent: 'center',
   height: heightCont,
   width: widhtCont,
   backgroundColor: 'black'
  },
  imageContentSection:{
    flexDirection: 'column',
    justifyContent: 'center'
  },
  menuSection:{
    position: 'absolute',
    top: topSection,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  menuSectionTwo:{
    position: 'absolute',
    top: topSection,
    flexDirection: 'row',
    justifyContent: 'center',
    //paddingLeft: '5%'
  },
  */
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
    },
    menuOption:{
      width: widhtCont,
    },
    imgOption:{
        width: widhtCont,
        justifyContent : 'center',
        alignItems: 'center',
    },
});

export default Networks
