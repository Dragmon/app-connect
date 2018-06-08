import React, { Component } from 'react';
import {SafeAreaView} from 'react-native';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import Header from './Header';
import Body from './Body';
import Menu from './Menu-fondo';
var totalWidth = Dimensions.get('window').width;
var slideMenudisplace = totalWidth*.90;
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }

  static navigationOptions = {
    header: null,
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

updateMenu(isOpen){
  this.setState({isOpen})
}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu
          menu={<Menu navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>}
          isOpen={this.state.isOpen}
          openMenuOffset={slideMenudisplace}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>
          <Body navigation={this.props.navigation} />
        </SideMenu>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#3581BC',
  },
});
