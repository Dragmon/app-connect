import React, {Component} from 'react';
import HeaderInterno from './HeaderInterno';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Alert,
    Image,
    ListView,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Platform,
} from 'react-native';

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .130;
var heightHeader = ((totalHeight == 568) ? totalHeight *.20 : totalHeight *.20);

const api = require('../api/api');

class Videos extends Component{
    static navigationOptions = {
        header: null,
        headerMode: null
    };

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            dataVideos: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2
            })
        }
    }

    componentWillMount() {
        api
            .getVideos()
            .then((response) => this.handleResponse(response))
            .catch((rejection) => { this.setState({ isLoading: false }) })
    }

    handleResponse(response) {
        this.setState({
            isLoading: true,
            dataVideos: this.state.dataVideos.cloneWithRows(response)
        })
    }

    _renderLoadingDataView() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                />
                <Image
                    style={styles.titleseccion}
                    source={require('../Img/Videos/encabezado-videos.png')}
                />
                <View style={styles.menuSection}>
                    <Text style={{color: '#FFFFFF'}}>Cargando videos...</Text>
                </View>
            </SafeAreaView>
        );
    }

    _renderVideosList(item) {
        return (
            <TouchableOpacity onPress={() => this._playVideo(item)}>
                <View>
                    <Image
                        style={styles.videoItemImage}
                        source={{uri: item.imagen}}
                    />
                    <Text style={styles.videoTitle}>
                        {item.titulo}{"\n"}
                        <Text style={styles.videoMicroResume}>
                            Ver video
                        </Text>
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    _playVideo(video) {
        this.props.navigation.navigate('ShowVideo', {video: video})
    }

    render() {
        if(!this.state.isLoading) {
            return this._renderLoadingDataView()
        }
        else {
            return (
                <SafeAreaView style={styles.safeArea}>
                    <HeaderInterno
                        onPress = {() => this.props.navigation.goBack()}
                    />

                    <Image
                        style={styles.titleseccion}
                        source={require('../Img/Videos/encabezado-videos.png')}
                    />
                    <View style={styles.menuSection}>
                        <View style={{height: totalHeight}}>
                            <ScrollView bounces={true}>
                                <ListView
                                    dataSource={this.state.dataVideos}
                                    renderRow={this._renderVideosList.bind(this)}
                                    enableEmptySections={true}
                                    style={styles.listVideos}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>
            )
        }
    }
}

const styles = StyleSheet.create({

    menuSection:{
        //position: 'absolute',
        //top: topSection,
        flexDirection: 'row',
        justifyContent: 'center',
        //marginTop: Platform.OS === 'ios' ? (totalHeight * .055) : 0,
    },

    listVideos: {
        height: totalHeight - heightHeader,
    },

    videoItemImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.55555,
        width: totalWidth
    },

    videoTitle: {
        padding: 20,
      	backgroundColor: '#1b313a',
      	color: '#ffffff',
      	fontWeight: 'bold',
    },

    videoMicroResume: {
        fontWeight: 'normal',
    },

    safeArea:{
        flex:1,
        backgroundColor: '#1B323A',
    },
    titleseccion:{
        width: totalWidth,
    },
});

export default Videos
