import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    WebView,
} from 'react-native';
import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

import VideoPlayer from 'react-native-af-video-player'

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .116;

const api = require('../api/api');

class VideosShowVideo extends Component{
    static navigationOptions = {
        header: null,
        headerMode: null
    };

    constructor(props) {
        super(props)

        this.state = {
            goBackText: '<  Regresar',
            canGoBack: true,
        }
    }

    _goBack() {
        this.props.navigation.goBack()
    }

    render() {
      console.log(this.props.video);
      tracker.trackEvent('APP', 'Ver Video', {label: this.props.video.titulo });
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <TouchableOpacity
                        disabled={!this.state.canGoBack}
                        onPress={this._goBack.bind(this)}
                    >
                        <Text style={{fontSize: 16, color: '#f3f3f3'}}>{this.state.goBackText}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <VideoPlayer url={this.props.video.url}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#020202'
    },

    topbar: {
        height: 30,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#666666',
    },
});

export default VideosShowVideo
