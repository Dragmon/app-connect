import React, {Component} from 'react'
import{
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Alert,
  Image
} from 'react-native'
import ImageView from "./ImageView";

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var thirdWidth = totalWidth * .334;

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
		  <View style={styles.firstModule}>

              {/* Notificaciones */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Notificaciones')}>
                  <View style={[styles.firstModuleIcon, styles.buttonNotifications]}>
                      <Image
                          source={require('../Img/Home/notificaciones.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Plan Comercial */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Notificaciones')}>
                  <View style={[styles.firstModuleIcon, styles.buttonPlanComercial]}>
                      <Image
                          source={require('../Img/Home/plancomercial.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Herramientas */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Notificaciones')}>
                  <View style={[styles.firstModuleIcon, styles.buttonTools]}>
                      <Image
                          style={styles.icons}
                          source={require('../Img/Home/herramientas.png')}
                      />
                  </View>
              </TouchableHighlight>
          </View>

          {/* Segundo módulo */}

          <Image
              source={require('../Img/Home/barra-connect.png')}
          />

          {/* Tercer módulo */}
          <View style={styles.firstModule}>
              <View style={styles.blockMenu}>

                  {/* Catalogos */}
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Catalogos')}>
                      <View style={styles.menuModule}>
                          <Image
                              source={require('../Img/Home/icono-catalogo.png')}
                          />
                      </View>
                  </TouchableHighlight>

                  {/* Presentaciones */}
                  <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Presentaciones')}>
                      <View style={styles.menuModule}>
                          <Image
                              source={require('../Img/Home/icono-presentaciones.png')}
                          />
                      </View>
                  </TouchableHighlight>

                  {/*Videos*/}
                  <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('Videos')}>
                      <View style={styles.menuModule}>
                          <Image
                              source={require('../Img/Home/icono-videos.png')}
                          />
                      </View>
                  </TouchableHighlight>


              </View>
          </View>
	  </View>
	)
  }
}

var styles = StyleSheet.create({

    mainImage:{
      width:totalWidth,
    },
    firstModule:{
        flexDirection: 'row',
    },
    blockMenu:{
        flexDirection: 'row',
    },
    firstModuleIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        width: (totalWidth / 3),
        height: (totalHeight * .07),
    },
    menuModule:{
        justifyContent: 'center',
        alignItems: 'center',
        width: (totalWidth / 3),
    },



    buttonNotifications:{
        backgroundColor: '#2F5062',
    },
    buttonTools:{
        backgroundColor: '#2F5062',
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
