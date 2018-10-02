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
    heightMenuSection,
    aspectRatio
} from '../api/shared';

import { NavigationActions } from 'react-navigation';

class Parrillas extends Component{

    constructor(props){
        super(props)
        this.state = {
            resolution : aspectRatio == 1.3 ? true : aspectRatio == 1.4 ? true : false,
        }
        console.log("resolucion :",this.state.resolution)
    }

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
    const networks = "networks";
    const regional = "regional";
    const tvpaga = "tvpaga";
    const tvabierta = "tvabierta";

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
                  {/*<TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ExcelView',{origin:excelnetworks})}>*/}
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ListGrills',{origin:networks})}>
                      <View style={styles.imageContentSection}>
                          {this.state.resolution == true ?
                              <Image
                                  source={require('../Img/Parrillas-tablet/icono-networks.png')}
                              />
                              :
                              <Image
                                  source={require('../Img/Parrillas/icono-networks.png')}
                              />
                          }
                      </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ListGrills',{origin:regional})} >
                      <View style={styles.imageContentSection}>
                          {this.state.resolution == true ?
                              <Image
                                  source={require('../Img/Parrillas-tablet/icono-regional.png')}
                              />
                              :
                              <Image
                                  source={require('../Img/Parrillas/icono-regional.png')}
                              />
                          }
                      </View>
                  </TouchableHighlight>
              </View>

              <View style={styles.menuSection}>
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ListGrills',{origin:tvabierta})}>
                      <View style={styles.imageContentSection}>
                          {this.state.resolution == true ?
                              <Image
                                  source={require('../Img/Parrillas-tablet/icono-abierta.png')}
                              />
                              :
                              <Image
                                  source={require('../Img/Parrillas/icono-abierta.png')}
                              />
                          }
                      </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('ListGrills',{origin:tvpaga})}>
                      <View style={styles.imageContentSection}>
                          {this.state.resolution == true ?
                              <Image
                                  source={require('../Img/Parrillas-tablet/icono-paga.png')}
                              />
                              :
                              <Image
                                  source={require('../Img/Parrillas/icono-paga.png')}
                              />
                          }
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
