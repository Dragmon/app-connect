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
    Image,
    SafeAreaView,
    Platform
} from 'react-native';
import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);


var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);

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

      <SafeAreaView style={styles.container}>
          <View style={styles.topbar}>
              <TouchableOpacity
                  disabled={!this.state.canGoBack}
                  onPress={this._goBack.bind(this)}
              >
                  <Text style={styles.textcontainer}>{this.state.goBackText}</Text>
              </TouchableOpacity>
          </View>

          <WebView
              scalesPageToFit={true}
              source={{uri: this.props.detail.url}}
              style={{flex: 1}}
              onLoad={this._updateGoBackCapabilities.bind(this)}
          />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1b313a'
    },
    topbar: {
        height: 50,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#1b313a',
    },
    textcontainer :{
        fontSize: (aspectRatio == 1.3 ? 28 : 22),
        color: '#f3f3f3',
        fontWeight: 'bold',
    }
});

export default NewsletterDetail
