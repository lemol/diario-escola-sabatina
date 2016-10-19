
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Content, Text, List, ListItem, Icon, Button, Textarea } from 'native-base';

import { setIndex } from '../../actions/list';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import theme from './theme';
import styles from './style';

const drawerImage = require('../../../images/logo-escola-sabatina.png');

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
      <Content theme={theme} style={styles.sidebar} >
        <Image
          square
          style={styles.drawerImage}
          source={drawerImage}
        />
        <List>
          <ListItem button iconLeft onPress={() => this.navigateTo('anatomy')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#2A502A', paddingLeft: 14 }]}>
                <Icon name="md-locate" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Hoje</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('thisWeek')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#90A437', paddingLeft: 14 }]}>
                <Icon name="ios-keypad" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Esta Semana</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('anatomy')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#0D44A8', paddingLeft: 14 }]}>
                <Icon name="ios-people" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Meus Irmãos</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('anatomy')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AA4139', paddingLeft: 14 }]}>
                <Icon name="ios-help-buoy" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Pedidos de Oração</Text>
            </View>
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
