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
    SafeAreaView,
    Platform,
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
var heightHeader = totalHeight *.20;

class HotResults extends Component{

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
    api.getHotResults().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
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
    const{navigate} = this.props.navigation;
    let data = [presentation.url, presentation.titulo];

  	return(
  		<TouchableOpacity onPress={() => navigate('ImageView',{data:data})}>
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
      <SafeAreaView style={styles.safeArea}>
        <HeaderInterno
          onPress = {() => this.props.navigation.goBack()}
        />
        <View style={styles.containerTitle}>
            <Image
                style={styles.titleseccion}
                source={require('../Img/Hot-results/encabezado-hotresults.png')}
            />
        </View>

        <View style={styles.menuHotResults}>
            <ScrollView bounces={true}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderpresentation.bind(this)}
                    style={styles.listViewHotResults}
                    enableEmptySections={true}
                />
            </ScrollView>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    containerTitle:{
        flexDirection: 'row',
        backgroundColor: '#E44858',
        justifyContent: 'center'
    },
    menuHotResults:{
        flexDirection: 'row',
    },
    presentationMeta:{
  	    padding: 20,
      	backgroundColor: '#1b313a',
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
    },
    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
    },
    listViewHotResults:{
        height: totalHeight - heightHeader,
    },
});

export default HotResults
