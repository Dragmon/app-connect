import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Alert,
    Image,
    Paltform,
} from 'react-native'
import ImageView from "./ImageView";

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var widthOption = (totalWidth / 3);
var heightModuleIcon = (totalHeight * .08);
var aspectRatio = (totalHeight/totalWidth).toFixed(1);

console.log("aspectRatio : ", aspectRatio);
console.log("heaight : ", totalHeight);
console.log("width : ", totalWidth);
console.log("widht /3 :" , totalWidth/3)

class Body extends Component{

  render(){

    const{navigate} = this.props.navigation;

    return(

	  <View style={styles.mainContainer}>

		  {/* Imagen principal */}
		  <Image
              style={styles.mainImage}
              source={require('../Img/Home/image-home.png')}
          />

		  {/* Primer módulo */}
		  <View style={styles.blockModule}>

              {/* Notificaciones */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Notificaciones')}>
                  <View style={[styles.moduleIcon, styles.buttonNotifications]}>
                      <Image
                          source={require('../Img/Home/notificaciones.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Plan Comercial */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PlanComercial')}>
                  <View style={[styles.moduleIcon, styles.buttonPlanComercial]}>
                      <Image
                          source={require('../Img/Home/plancomercial.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Herramientas */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Circulares')}>
                  <View style={[styles.moduleIcon, styles.buttonTools]}>
                      <Image
                          style={styles.icons}
                          source={require('../Img/Home/circulares.png')}
                      />
                  </View>
              </TouchableHighlight>
          </View>

          {/* Segundo módulo */}

          <View>
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Parrillas')}>
                  <Image
                      style={styles.banner}
                      source={require('../Img/Home/parrillas-programacion.png')}
                  />
              </TouchableHighlight>
          </View>

          {/* Tercer módulo */}
          <View style={styles.blockModule}>

              {/* Networks */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('NewsletterClientes')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-detras.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Regional */}
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('NewsletterMensual')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-afiches.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Catalogos */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Catalogos')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-catalogo.png')}
                      />
                  </View>
              </TouchableHighlight>

          </View>

          {/* Cuarto módulo */}
          <View style={styles.blockModule}>

              {/*Videos*/}
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('Videos')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-videos.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Circulares */}
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('HotResults')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-hot-results.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Presentaciones */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Presentaciones')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-presentaciones.png')}
                      />
                  </View>
              </TouchableHighlight>

          </View>
	  </View>
	)
  }
}

/*
* Resolucion 1.6 ipad
* Resolución 1.8 iphone 5, 5s, 6, 6s, 7, 7+, 8, 8+
* Resolución 2.2 iphone X
*
*/

var styles = StyleSheet.create({

    mainContainer:{
        backgroundColor: '#1B323A',
    },
    mainImage:{
        width:totalWidth,
        resizeMode : 'contain',
        //marginBottom: aspectRatio <= 1.8 ? -10 : 0,
        //marginBottom: aspectRatio <= 1.8 ? -10 : aspectRatio <= 2.2 ? -10 : 0,
        marginBottom : -10,
        marginTop: aspectRatio <= 1.8 ? -10 : 0,
    },
    banner:{
        width:totalWidth,
        resizeMode : 'contain',
    },
    blockModule:{
        flexDirection: 'row',
    },
    moduleIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        width: widthOption,
        height: heightModuleIcon,
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



    buttonNotifications:{
        backgroundColor: '#2F5062',
    },
    buttonTools:{
        backgroundColor: '#1b313a',
    },
    buttonPlanComercial:{
        backgroundColor:'#036666',
    },

  homeBlock:{
   height: totalHeight*.1500,
   width: totalWidth,
   marginTop: -1,
  },
  horizontalHomeBlock:{
    justifyContent: 'center',
    flexDirection: 'row',
    height: totalHeight*.137,
    width: totalWidth,
  },
  horizontalImageSection:{
   flexDirection: 'row',
   justifyContent: 'center',
   height: totalHeight*.137,
   width: totalWidth*.334,
   backgroundColor: 'black'
  },
  imageContentSection:{
    flexDirection: 'column',
    justifyContent: 'center',
  },
  horizontalHomeBlockEnd:{
    flexDirection: 'row',
    height: totalHeight*.137,
    width: totalWidth,
  },
  horizontalImageSectionEnd:{
   flexDirection: 'row',
   justifyContent: 'center',
   height: totalHeight*.137,
   width: totalWidth*.500,
   backgroundColor: 'black'
  }
});

export default Body
