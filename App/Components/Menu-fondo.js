import React, {Component} from 'react';
//import Browser from 'react-native-browser';
import{
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native'

class Menu extends Component{

  render(){

    const{navigate} = this.props.navigation;

    return(
      <SafeAreaView style={styles.contmenu}>
        <View style={styles.contbackgroundimage}>
          <Image
            style={{flex: 1,}}
            source={require('../Img/Menu/background_menu.png')}
          />
        </View>
        <View style={styles.containermenu}>
          {/* Menú Inicio */}
          <TouchableOpacity style={styles.innerRow} onPress={() => this.props.toggle()}>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_home.png')}
            />
            <Text style={styles.innerTextStyle}>INICIO</Text>
          </TouchableOpacity>
          {/* Menú Notificaciones */}
          <TouchableOpacity style={styles.innerRow}  onPress={() => navigate('Notificaciones') }>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_notificaciones.png')}
            />
            <Text style={styles.innerTextStyle}>NOTIFICACIONES</Text>
          </TouchableOpacity>
          {/* Menú Herramientas */}
          <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Newsletter')}>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_herramientas.png')}
            />
            <Text style={styles.innerTextStyle}>HERRAMIENTAS</Text>
          </TouchableOpacity>
          {/* Menú Calendario */}
          <TouchableOpacity style={styles.innerRow} onPress={() => navigate('Calendario')}>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_calendario.png')}
            />
            <Text style={styles.innerTextStyle}>CALENDARIO</Text>
          </TouchableOpacity>
          {/* Menú Televisa TV */}
          <TouchableOpacity style={styles.innerRow} onPress={() => navigate('UrlView')}>
            <Image style={{
              left: 30,
              alignSelf: 'center',
              height: 32,
              width: 35
              }}
              source={require('../Img/Menu/icon_televisaventas.png')}
            />
            <Text style={styles.innerTextStyle}>TELEVISAVENTAS.TV</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  contmenu:{
    flex: 1,
  },
  contbackgroundimage:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
    height: 32,
    width: 32
  },
  innerTextStyle:{
    fontSize: 20,
    left: 30,
    padding: 30,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.0)'
  }
})

export default Menu
