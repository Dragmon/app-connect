import React, { Component } from 'react';
import { WebView } from 'react-native';
import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

class UrlView extends Component {

  render() {
    tracker.trackEvent('APP', 'Televisa Ventas', {label: 'Sitio web' });
    return (
      <WebView
        source={{uri: 'http://televisaventas.tv/'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default UrlView
