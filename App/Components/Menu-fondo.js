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
          {/*
        <View style={styles.contbackgroundimage}>
          <Image
              style={styles.backgroundimg}
              source={require('../Img/Menu/background_menu.png')}
          />
        </View>
        */}
        <View style={styles.containermenu}>

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
