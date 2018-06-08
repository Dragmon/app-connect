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
import { NavigationActions } from 'react-navigation'

var totalHeiHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeiHeight*.90;
var widhtCont = totalWidth*.999999;
var topSection = totalHeiHeight * .200;

class Newsletter extends Component{

  static navigationOptions = {
    header: null,
  };

  render(){

    const{navigate} = this.props.navigation;

    return(
      <View>
        <HeaderInterno
          onPress = {() => this.props.navigation.goBack()}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitleText}>Calendario</Text>
        </View>

        <View style={styles.contImage}>
          <TouchableHighlight onPress={() => navigate('CalendarView')}>
            <Image source={require('../Img/Calendario/calendarioBackground.png')} style={styles.imageButton}/>
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
  imageButton:{
    height: heightCont,
    width: widhtCont,
    marginTop: -40
  }

  /*
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
  }
  menuSection:{
    position: 'absolute',
    top: topSection,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '5%'
  }
  */
});

export default Newsletter
