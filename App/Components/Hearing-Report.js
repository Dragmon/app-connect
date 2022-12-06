import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import ButtonsStyles from '../styles/ButtonsStyles';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ListView,
    Image,
    SafeAreaView,
    Platform,
} from 'react-native';

import {
    totalHeight,
    totalWidth,
    heightTitle,
    heightMenuSection, aspectRatio
} from '../api/shared';

import { downloadFile } from '../api/donwloadfile';

import { NavigationActions } from 'react-navigation';
var api = require('../api/api');

class HearingReport extends Component{

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
    api.getDataFifteen().then((jsonRes) => this.handleResponse(jsonRes)).catch((error) => {
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

  _showPresentation(presentation) {
    this.props.navigation.navigate('ShowPresentation', { presentation: presentation })
  }

  _renderpresentation(presentation){
    //const{navigate} = this.props.navigation;
    //let data = [presentation.url, presentation.titulo];

  	return(
      <View>
        <Image
          style={styles.presentationRow}
          source={{ uri: presentation.imagen }}
        />
        <Text style={styles.presentationMeta}>
          {presentation.titulo}{"\n"}
        </Text>
        <View style={ButtonsStyles.infoDocument}>
          <TouchableOpacity onPress={() => this._showPresentation(presentation)}>
            <View style={ButtonsStyles.buttonView}>
              <Text style={ButtonsStyles.textButtonDocument}>
                Ver
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => downloadFile(presentation)}>
            <View style={ButtonsStyles.buttonDownload}>
              <Text style={ButtonsStyles.textButtonDocument}>
                Descargar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>      
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
                source={require('../Img/reporte-audiencia/encabezado-reporte.png')}
            />
        </View>

        <View style={styles.menuDataFifteen}>
            <ScrollView bounces={true}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderpresentation.bind(this)}
                    style={styles.listViewDataFifteen}
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
    menuDataFifteen:{
        flexDirection: 'row',
        height: heightMenuSection,
    },
    presentationMeta:{
        paddingTop: Platform.OS === 'ios' ? 20 : 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: Platform.OS === 'ios' ? 0 : 10,
      	backgroundColor: '#1b313a',
  	    color: '#ffffff',
  	    fontWeight: 'bold',
        fontSize: (aspectRatio == 1.3 ? 20: 15 ),
        marginTop: 0,
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
    listViewDataFifteen:{
        //height: totalHeight - heightHeader,
        height: heightMenuSection,
    },
});

export default HearingReport
