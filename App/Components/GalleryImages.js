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

import {
    totalWidth,
    heightTitle,
    heightMenuSection,
    aspectRatio,
    domainUrl
} from '../api/shared';

import {downloadFile} from '../api/donwloadfile';
import ButtonsStyles from "../styles/ButtonsStyles";

var api = require('../api/api');

class GalleryImages extends Component{

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
    api.getGalleryImage().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
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

      presentation.url = domainUrl + presentation.url;
      console.log("presentation :", presentation);

      const{navigate} = this.props.navigation;
      let data = [presentation.url, presentation.titulo];
      console.log("data :", data);

  	return(
        <View>
            <Image
                style={styles.presentationRow}
                source={{uri:presentation.imagen}}
            />
            <Text style={styles.presentationMeta}>
                {presentation.titulo}
            </Text>
            <View style={ButtonsStyles.infoDocument}>
                <TouchableOpacity onPress={() => navigate('ImageView',{data:data})}>
                    <View style={ButtonsStyles.buttonView}>
                        <Text style={ButtonsStyles.textButtonDocument}>
                            Ver Imagen
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => downloadFile(presentation)}>
                    <View style={ButtonsStyles.buttonDownload}>
                        <Text style={ButtonsStyles.textButtonDocument}>
                            Descargar Imagen
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        /*
  		<TouchableOpacity onPress={() => navigate('ImageView',{data:data})}>
  			<View>
  				<Image source={{uri:presentation.imagen}} style={styles.presentationRow}>
  				</Image>
  				<Text style={styles.presentationMeta}>
                    {presentation.titulo}
  				</Text>
  			</View>
  		</TouchableOpacity>
  		*/
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
                source={require('../Img/Galeria/encabezado-galeria.png')}
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
        height: heightMenuSection,
    },
    presentationMeta:{
        textAlign: 'center',
  	    padding: 20,
      	backgroundColor: '#1b313a',
  	    color: '#ffffff',
  	    fontWeight: 'bold',
        fontSize: (aspectRatio == 1.3? 23: 18 ),
        marginTop: Platform.OS === 'ios' ? 0 : -.3,
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
        height: heightTitle,
    },
    listViewHotResults:{
        //height: totalHeight - heightHeader,
        height: heightMenuSection,
    },
});

export default GalleryImages
