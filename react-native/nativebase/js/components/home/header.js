
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Title, Text, Button, Icon } from 'native-base';

import * as drawerActions from '../../actions/drawer';
import * as routeActions from '../../actions/route';

class Header extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    goBack: React.PropTypes.func,
    title: React.PropTypes.string
  }

  render() {
    const { title, openDrawer, goBack } = this.props;
    return (
      <View>
        <Button transparent onPress={goBack}>
          <Icon name="ios-arrow-back"/>
        </Button>
        <Title>{title}</Title>
        <Button transparent onPress={openDrawer}>
          <Icon name="ios-menu" />
        </Button>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    title: 'Inicio'
  };
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    openDrawer: drawerActions.openDrawer,
    goBack: routeActions.popRoute,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
