import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import SectionArrayNewsMonthly from './SectionArrayNewsMonthly';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  WebView,
  ScrollView,
  Image
} from 'react-native';
import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

import { NavigationActions } from 'react-navigation'
var totalWidth = Dimensions.get('window').width;

class NewsletterDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      goBackText: '',
      canGoBack: false,
    }
  };

  static navigationOptions = {
    header: null,
    headerMode: null,
  };

  _goBack() {
      this.props.navigation.goBack()
  }

  _updateGoBackCapabilities() {
      this.setState({
          canGoBack: true,
          goBackText: '<  Regresar'
      })
  }

  render(){
    console.log("Carga de webview");
    console.log(this.props.detail);
    tracker.trackEvent('APP', 'Ver Detalle Newsletter', {label: this.props.detail.titulo });
    return(

      <View style={styles.container}>
          <View style={styles.topbar}>
              <TouchableOpacity
                  disabled={!this.state.canGoBack}
                  onPress={this._goBack.bind(this)}
              >
                  <Text style={{fontSize: 16, color: '#f3f3f3'}}>{this.state.goBackText}</Text>
              </TouchableOpacity>
          </View>

          <WebView
              scalesPageToFit={true}
              source={{uri: this.props.detail.url}}
              style={{flex: 1}}
              onLoad={this._updateGoBackCapabilities.bind(this)}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#f5fcff'
  },
  topbar: {
      height: 30,
      justifyContent: 'center',
      // alignItems: 'center',
      paddingLeft: 10,
      backgroundColor: '#666666',
  }
});

export default NewsletterDetail
