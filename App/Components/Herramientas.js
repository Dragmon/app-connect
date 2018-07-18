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

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var widthOption = (totalWidth / 3);
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .200;
var topSectionTwo = totalHeight * .450;

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
              source={require('../Img/Herramientas/encabezado-herramientas.png')}
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
          <View style={styles.menuSection}>

              {/* Catalogos */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('NewsletterClientes')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Newsletter/icono-newsletter.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Presentaciones */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('HotResults')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Hot-results/icono-hot-results.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/*Videos*/}
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('Parrillas')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Herramientas/icono-parrillas.png')}
                      />
                  </View>
              </TouchableHighlight>

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
      flexDirection: 'row',
      /*
    position: 'absolute',
    top: topSection,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '5%',
    */
  },
  menuSectionTwo:{
    position: 'absolute',
    top: topSectionTwo,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '5%'
  },


    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
    },
    menuModule:{
        justifyContent: 'center',
        alignItems: 'center',
        width: widthOption,
    },
    imgOption:{
        width: widthOption,
        justifyContent : 'center',
        alignItems: 'center',
    },
});

export default Networks
