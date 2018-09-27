import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Alert,
  ScrollView,
  processColor,
  Image
} from 'react-native';
import {totalHeight,totalWidth,aspectRatio} from "../api/shared";


var Modal   = require('react-native-modalbox');
var totalHeiHeight = Dimensions.get('window').height * .824;
var heightFooter = totalHeight *.08;
var titleConfig = {
    title: 'Connect',
    tintColor: 'white'
  };

class SectionArrayNewsClients extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  render(){

    var that = this;
    var rowsText = []
    console.log("Newsletter Array Clientes:", this.props.newsletterClientsArray);

    if(this.props.newsletterClientsArray != undefined){
      return (
        <View style={{height: totalHeiHeight - heightFooter}}>
        <ScrollView bounces={true}>
        {this.props.newsletterClientsArray.map(function(item, index){
        rowsText.push(
        <TouchableHighlight key={index} onPress={() => that.props.nav.navigate('NewsletterDetail', {detail: item})}>
          <View>
            <Image source={{uri: item.imagen}} style={[styles.imageRow]}/>
            <View style={styles.singleArrayTitleAndHourContainer}>
              <Text style={styles.resourceMeta}>{item.titulo}{"\n"}
                  {/*<Text style={styles.resourceMetaSub}>{item.fecha}</Text>*/}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
        )
        })}
        {rowsText}
        </ScrollView>
        </View>
      );
    }else{
        return(
            <Text style={{color: '#FFFFFF'}}>Cargando...</Text>
        )
    }
  }
};

var styles = StyleSheet.create({
    imageRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.555555,
        width: totalWidth
    },
    singleArrayTitleAndHourContainer:{
        alignSelf:'center',
        width: totalWidth
    },
    resourceMeta:{
  	    padding: 20,
  	    backgroundColor: '#1b313a',
  	    color: '#ffffff',
  	    fontWeight: 'bold',
        fontSize : (aspectRatio== 1.3 ? 25: 15),
    },
    resourceMetaSub:{
  	    fontWeight: 'normal'
    }
})

export default SectionArrayNewsClients;
