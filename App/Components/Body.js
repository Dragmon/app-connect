import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Linking,
    Image,
    Platform,
} from 'react-native'
var api = require('../api/api');

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var widthOption = (totalWidth / 3);
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
//var heightBody = (aspectRatio == 2.2 ? totalHeight *.72 : totalHeight *.80); //movil
var heightBody = (aspectRatio == 2.2 ? totalHeight *.72 : aspectRatio == 1.3 ? totalHeight *.82 :totalHeight *.80);
var heightAndroid = totalHeight * .85;
var heightAndRat = totalHeight * .75;

//var heightFirstModule = totalWidth *.5281; //para movil
//var heightFirstModule = (totalWidth/2.35) *.5281; //para tablet
var heightFirstModule = aspectRatio == 1.3 ? (totalWidth/2.35) *.5281 : totalWidth *.5281;

var heightSecondModule = (totalWidth *.4672)/3;
var heightThirdModule = totalWidth *.1312;
var heightFourthModule = (totalWidth *.8692)/3;

console.log("aspectRatio : ", aspectRatio);
console.log("heaight : ", totalHeight);
console.log("width : ", totalWidth);
console.log("widht /3 :" , totalWidth/3);

class Body extends Component{

    constructor(props){
        super(props);
        this.state ={
            urlImage: 'https://adminconnect.televisaventas.tv/logo-televisa.png',
            urlVentas: 'https://televisaventas.tv/',
            urlPrensa: 'https://www.televisa.com/sala-de-prensa/',
            urlPlanComercial: 'https://televisa.plancomercial.com/',
            modalVisible : false,
            //hideViewImage : aspectRatio == 1.3 ? true : false,
        }
        console.log("estado inicial : ",this.state.urlImage);
        //console.log("estado hideViewImage : ",this.state.hideViewImage);
    }

    setModalVisible(visible) {

        this.setState({modalVisible: visible});

    }
    componentWillMount(){
        console.log("componentWillMount");
        api.getImgHome()
            .then(function(myJson){
                console.log("my json : ",myJson);

                var obJson = myJson[0];
                console.log(obJson);

                var imgurl = obJson.imagen;
                console.log("url-imagen : ", imgurl);

                this.setState({urlImage:imgurl});
            }.bind(this));
    }
  render(){

    const{navigate} = this.props.navigation;

      //console.log("estado actualizado : ",this.state.urlImage);

      return(

	  <View style={styles.mainContainer}>

          {/* Primer m??dulo */}

          <View style={styles.containerImage}>
              <Image
                  style={styles.mainImage}
                  source={{uri: this.state.urlImage}}
              />
          </View>

		  {/* Segundo m??dulo */}
		  <View style={[styles.blockModule, styles.secondModule]}>

              {/* Notificaciones */}
              {/* <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Notificaciones')}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/notificaciones.png')}
                      />
                  </View>
              </TouchableHighlight> */}

              {/* Ventas */}
              <TouchableHighlight underlayColor="#036566" onPress={() => Linking.openURL(this.state.urlVentas)}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/ventas.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Plan Comercial */}
              <TouchableHighlight underlayColor="#1B323A" onPress={() => Linking.openURL(this.state.urlPlanComercial)}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/plancomercial.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Circulares */}
              {/* <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Circulares')}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/circulares.png')}
                      />
                  </View>
              </TouchableHighlight> */}

              {/* Prensa */}
              <TouchableHighlight underlayColor="#036566" onPress={() => Linking.openURL(this.state.urlPrensa)}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/Prensa.png')}
                      />
                  </View>
              </TouchableHighlight>
          </View>

          {/* Tercer m??dulo */}

          <View style={styles.iconParrillas}>
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Parrillas')}>
                  <Image
                      style={styles.banner}
                      source={require('../Img/Home/parrillas-programacion.png')}
                  />
              </TouchableHighlight>
          </View>

          {/* Cuarto m??dulo */}
          <View style={[styles.blockModule, styles.fourtModule]}>

              {/* Frente creativo */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('NewsletterClientes')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-frente.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Casos de exito */}
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('CasosExito')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-casos-exito.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Quick Update */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('QuickUpdate')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-quick-update.png')}
                      />
                  </View>
              </TouchableHighlight>
          </View>

          {/* Quinto m??dulo */}
          <View style={[styles.blockModule, styles.fourtModule]}>

              {/*Videos*/}
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('Videos')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-videos.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Hot Reults */}
              {/*
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('HotResults')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-hot-results.png')}
                      />
                  </View>
              </TouchableHighlight>
              */}

              {/* Presentaciones */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Presentaciones')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-presentaciones.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Reporte de audiencia */}
              {/* <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('DataFifteen')}> */}
              <TouchableHighlight underlayColor="#2F284B" onPress={() => navigate('HearingReport')}>
                  <View style={styles.menuModule}>
                      <Image
                          style={styles.imgOption}
                          source={require('../Img/Home/icono-reporte-audiencia.png')}
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
* Resoluci??n 1.8 iphone 5, 5s, 6, 6s, 7, 7+, 8, 8+
* Resoluci??n 2.2 iphone X
*
*/

var styles = StyleSheet.create({
    mainContainer:{
        ...Platform.select({
            ios:{
                height: heightBody,
            },
            android:{
                height: aspectRatio == 1.9 ? heightAndRat : heightAndroid,
            },
        }),
        //height: Platform.OS === 'ios' ? heightBody : heightAndroid ,
        backgroundColor: '#1B323A',
        //backgroundColor: '#ffffff',
    },
    containerImage:{
        height: heightFirstModule,
    },
    mainImage:{
        width:totalWidth,
        resizeMode : 'contain', //movil
        //resizeMode : 'cover', //tablet
        height: heightFirstModule,
    },
    moduleIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        width: widthOption,
        height: heightSecondModule,
    },
    secondModule:{
        height: heightSecondModule,
    },
    imgIcon:{
        //width: ((totalHeight == 568) ? (totalWidth / 3.5) : 'auto'),
        resizeMode: 'contain',
        width: widthOption,
        height: heightSecondModule,
    },
    imgIconCirculares:{
        //width: ((totalHeight == 568) ? (totalWidth / 5) : 'auto'),
        resizeMode: 'contain',
    },
    iconParrillas:{
        /*
        ...Platform.select({
            ios:{
                marginTop: totalHeight == 568 ? -3 : 0,
                marginBottom: totalHeight == 568 ? -3 : 0,
            },
        }),
        */
        //width: widthOption,
        height: heightThirdModule,
    },
    banner:{
        width:totalWidth,
        resizeMode : 'contain',
        height: heightThirdModule,
    },
    blockModule:{
        flexDirection: 'row',
    },
    fourtModule:{
        height: heightFourthModule,
    },

    menuModule:{
        justifyContent: 'center',
        alignItems: 'center',
        width: widthOption,
    },
    imgOption:{
        resizeMode: 'contain',
        width: widthOption,
        justifyContent : 'center',
        alignItems: 'center',
        height: heightFourthModule,
    },
});

export default Body
