import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Dimensions,
    Platform, TouchableOpacity, Linking
} from 'react-native';

var api = require('../api/api');
var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
var heightFirstModule = aspectRatio == 1.3 ? (totalWidth/2.35) *.5281 : totalWidth *.5281;


class ImageViewHeader extends Component{

    constructor(props){
        super(props);
        this.state ={
            urlImage: "https://adminconnect.televisaventas.tv/logo-televisa.png",
        }
        console.log("estado inicial : ",this.state.urlImage);
    }

    componentWillMount(){
        console.log("componentWillMount");
        api.getImgHome()
            .then(function(myJson){
                console.log("my json : ",myJson);

                var obJson = myJson[0];
                console.log(obJson);

                var imgurl = obJson.imagen;
                console.log("url-imagen : ", imgurl);

                this.setState({urlImage:imgurl});
            }.bind(this));
    }

    render(){
        return(
            <View style={styles.containerImage}>
                <Image
                    style={styles.mainImage}
                    //source={require('../Img/Home/image-home.png')}
                    source={{uri: this.state.urlImage}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerImage:{
        height: heightFirstModule,
    },
    mainImage:{
        width:totalWidth,
        resizeMode : 'contain', //movil
        //resizeMode : 'cover', //tablet
        height: heightFirstModule,
    },


});

export default ImageViewHeader