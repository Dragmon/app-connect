import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Alert,
    Image,
    Platform,
} from 'react-native'
var api = require('../api/api');
import ImageView from "./ImageView";

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var widthOption = (totalWidth / 3);
var heightModuleIcon = (totalHeight * .08);
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
var heightBody = (aspectRatio == 2.2 ? totalHeight *.72 : totalHeight *.80);
var heightFirstModule = totalWidth *.5281;
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
            urlImage: "https://adminconnect.televisaventas.tv/global/uploads/img-home/catalogos_image_home_png_thumb_507x960.jpg",
        }
        console.log("estado inicial : ",this.state.urlImage);
    }

    componentWillMount(){
        console.log("componentWillMount");
        //api.getImgHome().then(data => this.setState({hits: data.hits}));
        //console.log("data :", this.state.hits);
        //return fetch(url).then((res) => res.json())
        api.getImgHome()
            .then(function(myJson){
                console.log("my json : ",myJson);

                var obJson = myJson[0];
                console.log(obJson);

                var imgurl = obJson.imagen;
                console.log("url-imagen : ", imgurl);

                this.setState({urlImage:imgurl});
                //console.log("estado inicial : ",this.state.urlImage);
            }.bind(this));

    }

  render(){

    const{navigate} = this.props.navigation;
    //const {hits} =this.state;
    //console.log("hits render:", hits);

      console.log("estado actualizado : ",this.state.urlImage);

      return(

	  <View style={styles.mainContainer}>

          {/* Primer módulo */}
          <View style={styles.containerImage}>
              <Image
                  style={styles.mainImage}
                  //source={require('../Img/Home/image-home.png')}
                  source={{uri: this.state.urlImage}}
              />
          </View>
		  {/* Segundo módulo */}
		  <View style={[styles.blockModule, styles.secondModule]}>

              {/* Notificaciones */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Notificaciones')}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/notificaciones.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Plan Comercial */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('PlanComercial')}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/plancomercial.png')}
                      />
                  </View>
              </TouchableHighlight>

              {/* Circulares */}
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Circulares')}>
                  <View style={styles.moduleIcon}>
                      <Image
                          style={styles.imgIcon}
                          source={require('../Img/Home/circulares.png')}
                      />
                  </View>
              </TouchableHighlight>
          </View>

          {/* Tercer módulo */}

          <View style={styles.iconParrillas}>
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('Parrillas')}>
                  <Image
                      style={styles.banner}
                      source={require('../Img/Home/parrillas-programacion.png')}
                  />
              </TouchableHighlight>
          </View>

          {/* Cuarto módulo */}
          <View style={[styles.blockModule, styles.fourtModule]}>

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

          {/* Quinto módulo */}
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
        height: heightBody,
        backgroundColor: '#1B323A',
        //backgroundColor: '#ffffff',
    },
    containerImage:{
        height: heightFirstModule,
    },
    mainImage:{
        width:totalWidth,
        resizeMode : 'contain',
        height: heightFirstModule,
        //height: Platform.OS === 'ios' ? ((totalHeight == 568) ? (totalHeight * .31): 'auto'): 'auto',
        //height: totalHeight * .31,
        //marginBottom : -10,
        //marginTop: Platform.OS === 'ios' ? ((totalHeight == 568) ? 0: -10): 0,

        //marginTop: (aspectRatio <= 1.8 && totalWidth == 320) ? 20 : aspectRatio <= 1.8 ? -10 : 0
        //marginBottom: aspectRatio <= 1.8 ? -10 : 0,
        //marginBottom: aspectRatio <= 1.8 ? -10 : aspectRatio <= 2.2 ? -10 : 0,
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
        width: widthOption,
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
    /*
    buttonNotifications:{
        backgroundColor: '#2F5062',
    },
    buttonTools:{
        backgroundColor: '#1b313a',
    },
    buttonPlanComercial:{
        backgroundColor:'#036666',
    },
    */
});

export default Body
