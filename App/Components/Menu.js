import React, {Component} from 'react';
//import Browser from 'react-native-browser';
import{
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'

class Menu extends Component{
/*
  _openTelevisaVentas(){
  	Browser.open('http://televisaventas.tv/',{
  		showUrlWhileLoading: false,
  		showPageTitles: false,
	  	hideWebViewBoundaries: true,
    	doneButtonTitle: 'Cerrar'
    });
  }
*/
  render(){
    return(
      <View style={styles.container}>
        {/*<ImageBackground source={require('../Img/Menu/background_menu.png')}> */}
          {/* Menú Inicio */}
          <TouchableOpacity style={styles.innerRow} /*onPress={() => this.props.toggle()}*/>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_home.png')}
            />
            <Text style={styles.innerTextStyle}>INICIO</Text>
          </TouchableOpacity>
          {/* Menú Notificaciones */}
          <TouchableOpacity style={styles.innerRow} /*onPress={() => this.props.toggleAndSend('Notifications', 'NotificationsPageComponent')}*/>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_notificaciones.png')}
            />
            <Text style={styles.innerTextStyle}>NOTIFICACIONES</Text>
          </TouchableOpacity>
          {/* Menú Herramientas */}
          <TouchableOpacity style={styles.innerRow} /*onPress={() => this.props.toggleAndSend('Newsletter', 'Newsletter')}*/>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_herramientas.png')}
            />
            <Text style={styles.innerTextStyle}>HERRAMIENTAS</Text>
          </TouchableOpacity>          
          {/* Menú Calendario */}
          <TouchableOpacity style={styles.innerRow} /*onPress={() => this.props.toggleAndSend('Calendar', 'Calendar')}*/>
            <Image style={styles.innerIconStyle}
              source={require('../Img/Menu/icon_calendario.png')}
            />
            <Text style={styles.innerTextStyle}>CALENDARIO</Text>
          </TouchableOpacity>
          {/* Menú Televisa TV */}
          <TouchableOpacity style={styles.innerRow} /*onPress={ this._openTelevisaVentas }*/>
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
        {/*</ImageBackground>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3581BC'
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
