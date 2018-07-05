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
import { TabNavigator} from 'react-navigation';
import { NavigationActions } from 'react-navigation'

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .200;
{/*
class Newsletter extends Component{

  static navigationOptions = {
    header: null,
  };

  render(){

    const{navigate} = this.props.navigation;

    return(
      <SafeAreaView style={styles.safeArea}>

          <HeaderInterno
              onPress = {() => this.props.navigation.goBack()}
          />
          <Image
              style={styles.titleseccion}
              source={require('../Img/Newsletter/encabezado-newsletter.png')}
          />
          <View style={styles.contBackgroundImage}>
              <Image
                  style={{flex: 1}}
                  source={require('../Img/General/background_pattern.png')}
              />
          </View>

          <View style={styles.menuSection}>
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('NewsletterMensual')}>
                  <View style={[styles.horizontalImageSection, {backgroundColor: '#F5AB2D'}]}>
                      <View style={styles.imageContentSection}>
                          <Image
                              source={require('../Img/Newsletter/news-mensual.png')}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#E0214F" onPress={() => navigate('NewsletterClientes')}>
                  <View style={[styles.horizontalImageSection, {backgroundColor: '#2F284B'}]}>
                      <View style={styles.imageContentSection}>
                          <Image
                              source={require('../Img/Newsletter/news-clientes.png')}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
          </View>

      </SafeAreaView>
    )
  }
}


*/}

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#000'
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                    }}
                >
                    Settings!</Text>
            </View>
        );
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
        marginTop: Platform.OS === 'ios' ? (totalHeight * .055) : 0,
    },
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
    },
});

export default TabNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen },
    },
    {
        //tabBarComponent: TabBarTop,
    }
    );
