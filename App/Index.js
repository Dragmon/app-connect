import React,{Component} from 'react';
import{
  Navigator
} from 'react-native'

import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from './api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

import Main from './Components/Main';

import Newsletter from './Components/Newsletter';
import NewsletterMensual from './Components/NewsletterMensual';
import NewsletterDetail from './Components/NewsletterDetail';
import NewsletterClientes from './Components/NewsletterClientes';

import Notificaciones from './Components/Notificaciones';
import NotificacionesDetalle from './Components/NotificacionesDetalle';

import Videos from './Components/Videos';
import VideosShowVideo from './Components/VideosShowVideo';

import Presentaciones from './Components/Presentaciones';
import PresentationsShowPresentation from './Components/PresentationsShowPresentation';

import {StackNavigator} from 'react-navigation';
import OneSignal from 'react-native-onesignal';

import Parrillas from './Components/Parrillas';

import PdfView from './Components/pdfview';
//import ExcelView from './Components/excelview';

//import Calendario from './Components/Calendario';
//import CalendarView from './Components/Calendarview';

//import Networks from './Components/Networks';
//import PresentacionNetworks from './Components/PresentacionNetworks';

import HotResults from './Components/HotResults';
import ImageView from './Components/ImageView';

import Regional from './Components/Regional';

import UrlView from './Components/UrlView';

import Catalogos from './Components/Catalogos';

import PlanComercial from './Components/PlanComercial';

import CatalogoView from './Components/catalogoview';

import CatalogosRegional from './Components/CatalogosRegional';

//import Ibooks from './Components/Ibooks';

import Circulares from './Components/Circulares';

//import Herramientas from './Components/Herramientas';

import ListGrills from './Components/ListGrills';

import GalleryImage from './Components/GalleryImages';

{/* Turns this.props.navigation.state.params into this.params.<x>  */}
const paramsToProps = (MyComponent) => {
    return class extends React.Component {
        static navigationOptions = MyComponent.navigationOptions
    	// everything else, call as MyComponent

        render () {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <MyComponent {...this.props} {...params} />
        }
    }
}

const Index = StackNavigator({
    Home: {screen: Main},

    Newsletter: {screen: Newsletter},
    NewsletterMensual: {screen: NewsletterMensual},
    NewsletterDetail: {screen: paramsToProps (NewsletterDetail)},

    NewsletterClientes: {screen: NewsletterClientes},

    Notificaciones: {screen: Notificaciones},
    NotificionesDetalle: {screen: paramsToProps(NotificacionesDetalle)},

    Videos: {screen: Videos},
    ShowVideo: {screen: paramsToProps(VideosShowVideo)},

    Presentaciones: {screen: Presentaciones},
    ShowPresentation: {screen: paramsToProps(PresentationsShowPresentation)},

    Parrillas: {screen:Parrillas},

    PdfView: {screen:PdfView},

    //ExcelView: {screen:ExcelView},

    //Calendario: {screen:Calendario},
    //CalendarView: {screen:CalendarView},

    //Networks: {screen:Networks},
    //PresentacionNetworks: {screen:PresentacionNetworks},

    HotResults: {screen:HotResults},
    ImageView: {screen:ImageView},

    Regional: {screen:Regional},

    UrlView: {screen:UrlView},

    Catalogos: {screen:Catalogos},

    PlanComercial: {screen:PlanComercial},

    CatalogoView: {screen:CatalogoView},

    CatalogosRegional: {screen:CatalogosRegional},

    //Ibooks:{screen:Ibooks},

    Circulares:{screen:Circulares},

    //Herramientas: {screen:Herramientas}

    ListGrills:{screen:ListGrills},

    GalleryImage:{screen:GalleryImage}

},{
  headerMode: 'screen'
});

//Analytics

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default () => (
  <Index
    onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = getCurrentRouteName(currentState);
      const prevScreen = getCurrentRouteName(prevState);
      console.log(tracker);
      if (prevScreen !== currentScreen) {
        // the line below uses the Google Analytics tracker
        // change the tracker here to use other Mobile analytics SDK.
        tracker.trackScreenView(currentScreen); //--> Indica indefinido trackScreenView
      }
    }}
  />
);


//export default Index
