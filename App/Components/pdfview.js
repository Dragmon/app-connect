import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);


import Pdf from 'react-native-pdf';

export default class PDFExample extends React.Component {
    constructor(props){
      super(props)
      this.passProps = this.props.navigation.state.params;
      let origin = this.passProps.origin,
          separador = "/";
      //console.log(origin);
      fileArray = origin.split(separador);
      fileOpen = fileArray[1];
      //console.log(fileOpen);
      tracker.trackEvent('APP', 'Ver Presentacion', {label: fileOpen });
    }

    render() {
        const source = {uri:'https://apihavas.televisaventas.tv/global/uploads/' + this.passProps.origin,cache:true};
        //const source = {uri:'https://apihavas.televisaventas.tv/global/uploads/parrilla/' + this.passProps.origin,cache:true};
        //const source = {uri:'https://apihavas.televisaventas.tv/global/uploads/parrilla/parrillaregional.pdf',cache:true};
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});
