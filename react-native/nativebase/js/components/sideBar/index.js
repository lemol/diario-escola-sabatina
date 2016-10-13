
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon, Button } from 'native-base';

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
            <Button>
              <Icon name="ios-home"/>
            </Button>
            <Text>Inicio</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('blankPage')} >
            <Text>Hoje</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Semana</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Notas</Text>
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
