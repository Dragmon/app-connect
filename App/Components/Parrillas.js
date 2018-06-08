import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Alert,
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';

var totalHeiHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeiHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeiHeight * .200;
var topSectionTwo = totalHeiHeight * .450;

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
      <View>
        <HeaderInterno
          onPress = {() => this.props.navigation.goBack()}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitleText}>Parrillas</Text>
        </View>
        <View style={styles.contBackgroundImage}>
          <Image
            style={{flex: 1}}
            source={require('../Img/General/background_pattern.png')}
          />
        </View>
        <View style={styles.menuSection}>
          <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ExcelView',{origin:excelnetworks})}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#2F284B'}]}>
              <View style={styles.imageContentSection}>
                <Image
                  source={require('../Img/Parrillas/networks.png')}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PdfView',{origin:pdfregional})} >
            <View style={[styles.horizontalImageSection, {backgroundColor: '#3080bd'}]}>
              <View style={styles.imageContentSection}>
                <Image
                  source={require('../Img/Parrillas/regional.png')}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.menuSectionTwo}>
          <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PdfView',{origin:pdfabierta})}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#F5AB2D'}]}>
              <View style={styles.imageContentSection}>
                <Image
                  source={require('../Img/Parrillas/abierta.png')}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ExcelView',{origin:excelpaga})}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#FC495C'}]}>
              <View style={styles.imageContentSection}>
                <Image
                  source={require('../Img/Parrillas/paga.png')}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>

      </View>
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
    position: 'absolute',
    top: topSection,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  menuSectionTwo:{
    position: 'absolute',
    top: topSectionTwo,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '5%'
  }
});

export default Parrillas
