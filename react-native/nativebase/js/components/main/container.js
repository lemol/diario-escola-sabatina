// @flow

import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, H3, H2, H1, List, ListItem } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute, popRoute } from '../../actions/route';
import theme from '../../themes/base-theme';
import styles from './styles';

class AppContainer extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    popRoute: React.PropTypes.func,
  }

  renderHeader() {
    const { popRoute, openDrawer } = this.props;
    return <AppHeader {...{
      title: 'Semana',
      goBack: popRoute,
      openDrawer
    }}/>
  }

  renderContent() {
    return <Content><Text>Hello</Text></Content>;
  }

  renderFooter() {
    return null;
  }

  render() {
    return (
      <Container theme={theme} style={styles.container}>
        {this.renderHeader}
        {this.renderContent}
        {this.renderFooter}
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: route => dispatch(popRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, bindAction)(AppContainer);
