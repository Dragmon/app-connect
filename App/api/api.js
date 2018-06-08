import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

const api = {
    getNotifications() {
      tracker.trackEvent('API', 'Obtener Notificaciones');
      const url = 'https://connect.televisaventas.tv/api/v1/notificaciones/obtener'
      return fetch(url).then((response) => response.json())
    },

    getVideos() {
      tracker.trackEvent('API', 'Obtener Videos');
      const url = 'https://connect.televisaventas.tv/api/v1/videos/obtener'
      return fetch(url).then((response) => response.json())
    },

    getPresentations(){
      tracker.trackEvent('API', 'Obtener Presentaciones');
      const url = `https://apihavas.televisaventas.tv/api/v1/presentaciones/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getClientsNewsletter(){
      tracker.trackEvent('API', 'Obtener Clientes Newsletter');
      var url = `https://apihavas.televisaventas.tv/api/v1/newsletters/clientes/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getMonthlyNewsletter(){
      tracker.trackEvent('API', 'Obtener Newsletter Mensual');
      var url = `https://apihavas.televisaventas.tv/api/v1/newsletters/mensual/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getParrillaNetworksUrl(){
      tracker.trackEvent('API', 'Obtener Parrilla Networks');
      var url = `https://apihavas.televisaventas.tv/api/v1/parrilla/networks/obtener`;
      return url
    },

    getPresentacionesNetworks(){
      tracker.trackEvent('API', 'Obtener Presentaciones Networks');
      var url = `https://apihavas.televisaventas.tv/api/v1/catalogo-android/networks/obtener`;
      //var url = `http://dev.ioncom.com.mx/havasDashboard/api/v1/catalogo-android/netwoks/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getHotResults(){
      tracker.trackEvent('API', 'Obtener HotResults');
      var url = `https://apihavas.televisaventas.tv/api/v1/hot-results/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getCatalogs(){
      tracker.trackEvent('API', 'Obtener Catalogos');
      var url = `https://apihavas.televisaventas.tv/api/v1/catalogo-android/obtener`;
      return fetch(url).then((res) => res.json())
    },
    getPlanComercialAndroid() {
      tracker.trackEvent('API', 'Obtener Plan Comercial Android');
      const url = 'https://apihavas.televisaventas.tv/api/v1/plancomercial-android/obtener';
      return fetch(url).then((response) => response.json())
    },
    getCatalogosRegional() {
      tracker.trackEvent('API', 'Obtener Catalogo Regiona Android');
      const url = 'https://apihavas.televisaventas.tv/api/v1/catalogo-android/regional/obtener';
      return fetch(url).then((response) => response.json())
    }
}



module.exports = api;
