
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Content, Text, List, ListItem, Icon, Button, Textarea } from 'native-base';

import { setIndex } from '../../actions/list';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './style';

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.setIndex(undefined);
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >
        <List>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <Icon name="ios-home"/>
              <Text style={styles.menuItem}>Inicio</Text>
            </View>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('blankPage')} >
            <Text>Hoje</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Semana</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Notas</Text>
            <Textarea style={{
              ...styles.notesInput,
              visibility: 'hidden'
              }} />
          </ListItem>
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
