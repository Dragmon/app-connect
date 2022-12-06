import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ListView,
    Alert,
    Image,
    Platform
} from 'react-native';
import FooterInterno from "./Footer-Option";
import { NavigationActions } from 'react-navigation';
import {
    totalHeight,
    totalWidth,
    heightTitle,
    heightMenuSection
} from '../api/shared';

var api = require('../api/api');
var heightFooter = totalHeight *.08;

class PlanComercial extends Component{

  constructor(props){
    super(props)
    this.state = {
    	dataSource: new ListView.DataSource({
    		rowHasChanged: (row1, row2) => row1 !== row2
    	}),
        isLoading:false,
        url: 'https://televisa.plancomercial.com/',
        textorigin: 'IR AL SITIO DE PLAN COMERCIAL',
    }
  }

  static navigationOptions = {
    header: null,
  };


  componentWillMount(){
    api.getPlanComercialAndroid().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
      this.setState({
        isLoading: false
      })
    })
  }

  handleResponse(jsonRes){
    /*
    console.log("obteniendo arreglo");
    console.log(jsonRes);
    console.log("obteniendo arreglo a utilizar");
    console.log(data);
    */
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(jsonRes),
          //dataSource: this.state.dataSource.cloneWithRows(data),
          isLoading: true
      })
  }

  _renderpresentation(presentation){
    const{navigate} = this.props.navigation;
    /*
    var urlfile = presentation.url,
        separador = "/";
    urlfileArray = urlfile.split(separador);
    //newUrlFile = urlfileArray[5] + separador + urlfileArray[6];
    newUrlFile = urlfileArray[5] + separador + urlfileArray[6];
    console.log(urlfile);
    console.log(newUrlFile);
    console.log(presentation);
    */

  	return(
  		//<TouchableOpacity onPress={() => navigate('ExcelView',{origin:newUrlFile})}>
        <TouchableOpacity onPress={() => navigate('ShowPresentation',{presentation: presentation})}>
  			<View>
  				<Image source={{uri:presentation.imagen}} style={styles.presentationRow}>
  				</Image>
  				<Text style={styles.presentationMeta}>{presentation.titulo}{"\n"}
  					<Text style={styles.presentationSub}>Ver presentación</Text>
  				</Text>
  			</View>
  		</TouchableOpacity>
  	)
  }


  render(){
      const{navigate} = this.props.navigation;

        return(
            <View style={styles.safeArea}>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                />
                <Image
                    style={styles.titleseccion}
                    source={require('../Img/Plan-comercial/encabezado-plan-comercial.png')}
                />
                <View style={styles.menuPresentaciones}>
                    <ScrollView bounces={true}>
						<ListView
							dataSource={this.state.dataSource}
                            renderRow={this._renderpresentation.bind(this)}
							style={styles.listView}
							enableEmptySections={true}
						/>
					</ScrollView>
				</View>
                <FooterInterno
                    urlnav={this.state.url}
                    textorigin={this.state.textorigin}
                    style={styles.containerFooter}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuPresentaciones:{
        flexDirection: 'row',
        height: heightMenuSection - heightFooter,
        justifyContent: 'center',
    },
    presentationMeta:{
  	    padding: 20,
  	    backgroundColor: '#e91e53',
  	    color: '#ffffff',
  	    fontWeight: 'bold',
        marginTop: -.3,
    },
    presentationSub:{
  	    fontWeight: 'normal',
    },
    presentationRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.5555,
        width: totalWidth
    },
    titleseccion:{
        width: totalWidth,
        height: heightTitle,
    },
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
});

export default PlanComercial
