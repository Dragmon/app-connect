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
} from 'react-native';

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var heightCont = totalHeight*.25;
var widhtCont = totalWidth*.45;
var topSection = totalHeight * .130;

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
            <View>
                <HeaderInterno
                    onPress = {() => this.props.navigation.goBack()}
                />

                <View style={styles.containerTitle}>
                    <Text style={styles.sectionTitleText}>Videos</Text>
                </View>

                <View style={styles.contBackgroundImage}>
                    <Image
                        style={{flex: 1,}}
                        source={require('../Img/General/background_pattern.png')}
                    />
                </View>

                <View style={styles.menuSection}>
                    <Text>Cargando videos...</Text>
                </View>
            </View>
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
                <View>
                    <HeaderInterno
                        onPress = {() => this.props.navigation.goBack()}
                    />

                    <View style={styles.containerTitle}>
                        <Text style={styles.sectionTitleText}>Videos</Text>
                    </View>

                    <View style={styles.contBackgroundImage}>
                        <Image
                            style={{flex: 1,}}
                            source={require('../Img/General/background_pattern.png')}
                        />
                    </View>

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
                </View>
            )
        }
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

    menuSection:{
        position: 'absolute',
        top: topSection,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    listVideos: {},

    videoItemImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.55555,
        width: totalWidth
    },

    videoTitle: {
        padding: 20,
      	backgroundColor: '#f68934',
      	color: '#ffffff',
      	fontWeight: 'bold',
    },

    videoMicroResume: {
        fontWeight: 'normal',
    },
});

export default Videos
