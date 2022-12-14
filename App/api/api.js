import {GoogleAnalyticsTracker} from "react-native-google-analytics-bridge";
import Analytics from '../api/analytics';
let tracker = new GoogleAnalyticsTracker(Analytics.Metric.CodeAnalytics);

const api = {
    regDeviceNotifications(token){
        //var url = `https://connect.televisaventas.tv/api/v1/dispositivo/registrar`;
        tracker.trackEvent('API', 'Registrar dispositivo Notificaciones');
        const url = `https://adminconnect.televisaventas.tv/api/v1/dispositivo/registrar`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({devicetoken:token})
        }).then((response) => response.json())
    },
    getNotifications() {
      tracker.trackEvent('API', 'Obtener Notificaciones');
      //const url = 'https://connect.televisaventas.tv/api/v1/notificaciones/obtener'
        const url = `https://adminconnect.televisaventas.tv/api/v1/notificaciones/obtener`;
      return fetch(url).then((response) => response.json())
    },

    getVideos() {
      tracker.trackEvent('API', 'Obtener Videos');
      //const url = 'https://connect.televisaventas.tv/api/v1/videos/obtener'
        const url = `https://adminconnect.televisaventas.tv/api/v1/videos/obtener`;
      return fetch(url).then((response) => response.json())
    },

    getCasosExito() {
      tracker.trackEvent('API', 'Obtener Casos Exito');
      //const url = 'https://connect.televisaventas.tv/api/v1/videos/obtener'
        const url = `https://adminconnect.televisaventas.tv/api/v1/casos-exito/obtener`;
      return fetch(url).then((response) => response.json())
    },

    getPresentations(){
      tracker.trackEvent('API', 'Obtener Presentaciones');
      const url = `https://adminconnect.televisaventas.tv/api/v1/presentaciones/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getClientsNewsletter(){
      tracker.trackEvent('API', 'Obtener Clientes Newsletter');
      var url = `https://adminconnect.televisaventas.tv/api/v1/newsletters/clientes/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getMonthlyNewsletter(){
      tracker.trackEvent('API', 'Obtener Newsletter Mensual');
      var url = `https://adminconnect.televisaventas.tv/api/v1/newsletters/mensual/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getParrillaNetworksUrl(){
      tracker.trackEvent('API', 'Obtener Parrilla Networks');
      var url = `https://adminconnect.televisaventas.tv/api/v1/parrilla/networks/obtener`;
      return url
    },

    getParrilla(origin){
        tracker.trackEvent('API', 'Obtener Parrilla'+ origin);
        var url = 'https://adminconnect.televisaventas.tv/api/v1/parrillas/'+ origin +'/obtener';
        return fetch(url).then((res) => res.json())
    },

    getPresentacionesNetworks(){
      tracker.trackEvent('API', 'Obtener Presentaciones Networks');
      var url = `https://adminconnect.televisaventas.tv/api/v1/catalogo-android/networks/obtener`;
      //var url = `http://dev.ioncom.com.mx/havasDashboard/api/v1/catalogo-android/netwoks/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getHotResults(){
      tracker.trackEvent('API', 'Obtener HotResults');
      var url = `https://adminconnect.televisaventas.tv/api/v1/hot-results/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getDataFifteen(){
      tracker.trackEvent('API', 'Obtener HotResults');
      var url = `https://adminconnect.televisaventas.tv/api/v1/data15/obtener`;
      return fetch(url).then((res) => res.json())
    },

    getCatalogosAndroid(){
      tracker.trackEvent('API', 'Obtener Catalogos');
      var url = `https://adminconnect.televisaventas.tv/api/v1/catalogo-android/obtener`;
      return fetch(url).then((res) => res.json())
    },
    getPlanComercialAndroid() {
      tracker.trackEvent('API', 'Obtener Plan Comercial Android');
      const url = 'https://adminconnect.televisaventas.tv/api/v1/plancomercial-android/obtener';
      return fetch(url).then((response) => response.json())
    },
    getPlanComercialIOS() {
        tracker.trackEvent('API', 'Obtener Plan Comercial IOS');
        const url = 'https://adminconnect.televisaventas.tv/api/v1/plancomercial-ios/obtener';
        return fetch(url).then((response) => response.json())
    },
    getCatalogosRegional() {
      tracker.trackEvent('API', 'Obtener Catalogo Regiona Android');
      const url = 'https://adminconnect.televisaventas.tv/api/v1/catalogo-android/regional/obtener';
      return fetch(url).then((response) => response.json())
    },
    getCatalogosIOS(){
        tracker.trackEvent('API', 'Obtener Ibooks');
        var url = `https://adminconnect.televisaventas.tv/api/v1/catalogos/obtener`;
        return fetch(url).then((res) => res.json())
    },
    getCircular(){
        tracker.trackEvent('API', 'Obtener Ibooks');
        //var url = `https://connect.televisaventas.tv/api/v1/circulares/obtener`;
        var url = `https://adminconnect.televisaventas.tv/api/v1/circulares/obtener`;
        return fetch(url).then((res) => res.json())
    },
    getImgHome(){
        var url = `https://adminconnect.televisaventas.tv/api/v1/imghome/obtener`;
        return fetch(url).then((res) => res.json())
    },
    getGalleryImage(){
        var url = `https://adminconnect.televisaventas.tv/api/v1/gallery/obtener`;
        return fetch(url).then((res) => res.json())
    },
    getQuickUpdate(){
        tracker.trackEvent('API', 'Obtener Quick Update');
        var url = `https://adminconnect.televisaventas.tv/api/v1/quick-update/obtener`;
        return fetch(url).then((res) => res.json())
    },
    getSearchIOS(query) {
        console.log("Api Search :", query)
        tracker.trackEvent('API', 'Obtener Busqueda');
        const url = `https://adminconnect.televisaventas.tv/api/v1/search/obtener`;
        return fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query:query,
                system: 'ios'
            })
        }).then((response) => response.json())
    },
    getSearchAndroid(query) {
        console.log("Api Search :", query)
        tracker.trackEvent('API', 'Obtener Busqueda');
        const url = `https://adminconnect.televisaventas.tv/api/v1/search/obtener`;
        return fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query:query,
                system: 'android'
            })
        }).then((response) => response.json())
    },
}



module.exports = api;
