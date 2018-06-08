import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import SectionArrayNewsClients from './SectionArrayNewsClients';
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

var api = require('../api/api');


class NewsletterClientes extends Component{
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
    api.getClientsNewsletter().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
      this.setState({
        isLoading: false
      })
    })
  };

  handleResponse(jsonRes){
    this.setState({newsletterClientsArray: jsonRes});
  };

  render(){

    return(
      <View>
        <HeaderInterno
          onPress = {() => this.props.navigation.goBack()}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitleText}>Newsletter Clientes</Text>
        </View>
        <View style={styles.contBackgroundImage}>
          <Image
            style={{flex: 1,}}
            source={require('../Img/General/background_pattern.png')}
          />
        </View>
        <View style={styles.contentInfo}>
          <SectionArrayNewsClients newsletterClientsArray={this.state.newsletterClientsArray} nav={this.props.navigation}/>
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
    top: '12.4%'
  }
});

export default NewsletterClientes
