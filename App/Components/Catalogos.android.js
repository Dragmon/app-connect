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
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {heightTitle} from "../api/shared";
var api = require('../api/api');
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .128;
var topSectionTwo = totalHeight * .450;
var heightView = totalHeight - 100;

class Catalogos extends Component{

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
    api.getCatalogosAndroid().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
      this.setState({
        isLoading: false
      })
    })
  }

  handleResponse(jsonRes){
    console.log(jsonRes);
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(jsonRes),
          isLoading: true
      })
  }

  _renderpresentation(presentation){
    console.log(presentation);
    const{navigate} = this.props.navigation;
    var newUrlFile = presentation.url
    //console.log("nueva url");
    //console.log(newUrlFile);

  	return(
  		<TouchableOpacity onPress={() => navigate('CatalogoView',{origin:newUrlFile})}>
  			<View>
  				<Image source={{uri:presentation.imagen}} style={styles.presentationRow}>
  				</Image>
  				<Text style={styles.presentationMeta}>{presentation.titulo}{"\n"}
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
                source={require('../Img/Catalogos/encabezado-catalogos.png')}
            />
            <View style={styles.menuHotResults}>
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
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
        height: heightTitle,
    },
    menuHotResults:{
        position: 'absolute',
        flexDirection: 'row',
        top: topSection,
        height: heightView
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
    }
});

export default Catalogos;
