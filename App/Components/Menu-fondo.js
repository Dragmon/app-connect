import React, {Component} from 'react';
//import Browser from 'react-native-browser';
import{
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform,
    NativeModules
} from 'react-native'
var totalHeight = Dimensions.get('window').height;
var toatlWidth = Dimensions.get('window').width;
var aspectRatio = totalHeight/toatlWidth;

class Menu extends Component{

  render(){

    const{navigate} = this.props.navigation;

    return(
      <SafeAreaView style={styles.contmenu}>
        <View style={styles.contbackgroundimage}>
          <Image
              style={styles.backgroundimg}
              source={require('../Img/Menu/background_menu.png')}
          />
        </View>
        <View style={styles.containermenu}>

            {/* Menú Notificaciones */}
            <TouchableOpacity style={styles.innerRow}  onPress={() => navigate('Notificaciones') }>
                <Image style={styles.innerIconStyle}
                source={require('../Img/Menu/icono_notificaciones.png')}
                />
                <Text style={styles.innerTextStyle}>NOTIFICACIONES</Text>
            </TouchableOpacity>
            {/* Menú Plan comercial */}
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('PlanComercial')}>
                <Image style={styles.innerIconStyle}
                       source={require('../Img/Menu/icono_placomercial.png')}
                />
                <Text style={styles.innerTextStyle}>PLAN COMERCIAL</Text>
            </TouchableOpacity>
            {/* Menú Herramientas */}
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Newsletter')}>
                <Image style={styles.innerIconStyle}
                    source={require('../Img/Menu/icono_herramientas.png')}
                />
                <Text style={styles.innerTextStyle}>HERRAMIENTAS</Text>
            </TouchableOpacity>
            {/* Menú Calendario */}
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Catalogos')}>
                <Image style={styles.innerIconStyle}
                    source={require('../Img/Menu/icono_catalogos.png')}
                />
                <Text style={styles.innerTextStyle}>CATALOGOS</Text>
            </TouchableOpacity>
            {/* Menú Televisa TV */}
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Presentaciones')}>
                <Image style={styles.innerIconStyle}
                source={require('../Img/Menu/icono_presentaciones.png')}
                />
                <Text style={styles.innerTextStyle}>PRESENTACIONES</Text>
            </TouchableOpacity>

            {/* Menú Inicio */}
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Videos')}>
                <Image style={styles.innerIconStyle}
                       source={require('../Img/Menu/icono_videos.png')}
                />
                <Text style={styles.innerTextStyle}>VIDEOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Networks')}>
                <Image style={styles.innerIconStyle}
                       source={require('../Img/Menu/icono_networks.png')}
                />
                <Text style={styles.innerTextStyle}>NETWORKS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Regional')}>
                <Image style={styles.innerIconStyle}
                       source={require('../Img/Menu/icono_regional.png')}
                />
                <Text style={styles.innerTextStyle}>REGIONAL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerRow} onPress={() => navigate('UrlView')}>
                <Image style={styles.innerIconStyle}
                       source={require('../Img/Menu/icono_circulares.png')}
                />
                <Text style={styles.innerTextStyle}>CIRCULARES</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    backgroundimg:{
        flex:1,
        height: totalHeight,
    },
    contmenu:{
        flex: 1,
    },
    contbackgroundimage:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: totalHeight,
    },
    containermenu:{
        flex: 1,
        flexDirection: 'column',
    },
    innerRow:{
        flexDirection: 'row'
    },
    innerIconStyle:{
        left: 30,
        alignSelf: 'center',

    },
    innerTextStyle:{
        ...Platform.select({
            ios:{
                //condición para aplicar css en ipad y iphone
                fontSize: aspectRatio <= 1.6 ? 14 : 20,
                padding: aspectRatio <= 1.6 ? 11 : 20,
            },
            android:{
                fontSize: 15,
                padding: 12,
            }
        }),
        left: 30,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.0)'
    }
})

export default Menu
