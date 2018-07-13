import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import SectionArrayNewsMonthly from './SectionArrayNewsMonthly';
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
import { NavigationActions } from 'react-navigation';
var totalHeiHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;

var api = require('../api/api');


class NewsletterMensual extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentWillMount(){
    api.getMonthlyNewsletter().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
      this.setState({
        isLoading: false
      })
    })
  };

  handleResponse(jsonRes){
      // jsonRes.push(jsonRes[0]);
      // jsonRes.push(jsonRes[1]);
      // console.log('tatan: ', jsonRes)
    this.setState({newsletterMensualArray: jsonRes});
  };

  render(){

    return(
      <SafeAreaView style={styles.safeArea}>
        <HeaderInterno
          onPress = {() => this.props.navigation.goBack()}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitleText}>Newsletter Mensual</Text>
        </View>
        <View style={styles.contBackgroundImage}>
          <Image
            style={{flex: 1}}
            source={require('../Img/General/background_pattern.png')}
          />
        </View>
        <View style={styles.contentInfo}>
          <SectionArrayNewsMonthly newsletterMensualArray={this.state.newsletterMensualArray} nav={this.props.navigation}/>
        </View>
      </SafeAreaView>
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
  contBackgroundImage:{
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  contentInfo:{
    flex: 1,
    position: 'absolute',
    top: '12.4%',
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },


    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
    },
});

export default NewsletterMensual
