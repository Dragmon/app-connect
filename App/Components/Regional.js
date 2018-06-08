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
var widhtContTwo = totalWidth*.90;
var topSection = totalHeiHeight * .200;
var topSectionTwo = totalHeiHeight * .450;

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

    return(
      <View>
        <HeaderInterno
          onPress = {() => this.props.navigation.goBack()}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitleText}>Regional</Text>
        </View>
        <View style={styles.contBackgroundImage}>
          <Image
            style={{flex: 1}}
            source={require('../Img/General/background_pattern.png')}
          />
        </View>
        <View style={styles.menuSection}>
          <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('CatalogosRegional')}>
            <View style={[styles.horizontalImageSection, {backgroundColor: '#2F284B'}]}>
              <View style={styles.imageContentSection}>
                <Image
                  source={require('../Img/Regional/catalogos.png')}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#E0214F" onPress={() => {Alert.alert('Videos','Sin contenido por el momento')}} >
            <View style={[styles.horizontalImageSection, {backgroundColor: '#f27908'}]}>
              <View style={styles.imageContentSection}>
                <Image
                  source={require('../Img/Regional/videos-text.png')}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.menuSectionTwo}>
          <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PdfView',{origin:pdfregional})}>
            <View style={[styles.horizontalImageSectionTwo, {backgroundColor: '#F5AB2D'}]}>
              <View style={styles.imageContentSection}>
                <Image
                  source={require('../Img/Regional/icon-parrillas.png')}
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
  horizontalImageSectionTwo:{
   flexDirection: 'row',
   justifyContent: 'center',
   height: heightCont,
   width: widhtContTwo,
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

export default Networks
