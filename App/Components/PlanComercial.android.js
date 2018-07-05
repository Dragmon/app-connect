import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import Jsonplancomercia from '../api/plancomercial.json';
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
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';
var api = require('../api/api');
var totalHeiHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeiHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeiHeight * .135;
var topSectionTwo = totalHeiHeight * .450;
var data = Jsonplancomercia;

class PresentacionNetworks extends Component{

  constructor(props){
    super(props)
    this.state = {
    	dataSource: new ListView.DataSource({
    		rowHasChanged: (row1, row2) => row1 !== row2
    	}),
       isLoading:false,
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
    var urlfile = presentation.url,
        separador = "/";
    urlfileArray = urlfile.split(separador);
    //newUrlFile = urlfileArray[5] + separador + urlfileArray[6];
    newUrlFile = urlfileArray[5] + separador + urlfileArray[6];
    console.log(urlfile);
    console.log(newUrlFile);

  	return(
  		<TouchableOpacity onPress={() => navigate('ExcelView',{origin:newUrlFile})}>
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
      <View>
        <HeaderInterno
          onPress = {() => this.props.navigation.goBack()}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitleText}>Plan Comercial</Text>
        </View>

        <View style={styles.contBackgroundImage}>
          <Image
            style={{flex: 1}}
            source={require('../Img/General/background_pattern.png')}
          />
        </View>

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
  menuPresentaciones:{
    position: 'absolute',
    flexDirection: 'row',
    top: topSection,
  },
  presentationMeta:{
  	padding: 20,
  	backgroundColor: '#f68934',
  	color: '#ffffff',
  	fontWeight: 'bold',
  },
  presentationSub:{
  	fontWeight: 'normal',
  },
  presentationRow:{
   flexDirection: 'row',
   justifyContent: 'center',
   height: totalWidth*.5555,
   width: totalWidth
  }
});

export default PresentacionNetworks