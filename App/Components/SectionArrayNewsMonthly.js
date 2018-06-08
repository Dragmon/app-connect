import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    Alert,
    ScrollView,
    processColor,
    Image
} from 'react-native';

var Modal   = require('react-native-modalbox');
var totalWidth = Dimensions.get('window').width;
var totalHeiHeight = Dimensions.get('window').height * .824;
var titleConfig = {
title: 'Connect',
tintColor: 'white'
};

class SectionArrayNewsMonthly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };

    render() {
        var that = this;
        var rowsText = []
        console.log(this.props)
        console.log("Newsletter Array Mensual:", this.props.newsletterMensualArray);

        if(this.props.newsletterMensualArray != undefined) {
            return (
                <View style={{height: totalHeiHeight}}>
                    <ScrollView bounces={true}>
                    {
                        this.props.newsletterMensualArray.map((item, index) => (
                            // rowsText.push(
                                <TouchableHighlight key={index} onPress={() => that.props.nav.navigate('NewsletterDetail', {detail: item})}>
                                    <View>
                                        <Image source={{uri: item.imagen}} style={[styles.imageRow]}/>

                                        <View style={styles.singleArrayTitleAndHourContainer}>
                                            <Text style={styles.resourceMeta}>{item.titulo}{"\n"}
                                                <Text style={styles.resourceMetaSub}>{item.fecha}</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            // )
                        ))
                    }
                    {/*rowsText*/}
                    </ScrollView>
                </View>
            );
        }
        else {
            return(
                <Text>Cargando...</Text>
            )
        }
    }
}

var styles = StyleSheet.create({
    imageRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: totalWidth*.555555,
        width: totalWidth
    },

    singleArrayTitleAndHourContainer:{
        alignSelf:'center',
        width: totalWidth
    },

    resourceMeta:{
        padding: 20,
        backgroundColor: '#f68934',
        color: '#ffffff',
        fontWeight: 'bold',
    },

    resourceMetaSub:{
        fontWeight: 'normal'
    }
})

export default SectionArrayNewsMonthly;
