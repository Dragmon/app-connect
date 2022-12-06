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
var api = require('../api/api');
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .135;
var topSectionTwo = totalHeight * .450;
var heightView = totalHeight - 100;

class CatalogosRegional extends Component{

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
    api.getCatalogosRegional().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
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
  					<Text style={styles.presentationSub}>{presentation.fecha}</Text>
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
          <Text style={styles.sectionTitleText}>Catálogos</Text>
        </View>

        <View style={styles.contBackgroundImage}>
          <Image
            style={{flex: 1}}
            source={require('../Img/General/background_pattern.png')}
          />
        </View>

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
  menuHotResults:{
    position: 'absolute',
    flexDirection: 'row',
    top: topSection,
    height: heightView
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

export default CatalogosRegional
