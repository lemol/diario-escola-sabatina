// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Header, Title, Content, Text, Button, Icon, Footer, FooterTab } from 'native-base';

import * as drawerActions from '../../actions/drawer';
import * as routeActions from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

export default function(content, header, footer) {
  class Screen extends Component {

    static propTypes = {
      openDrawer: React.PropTypes.func,
      closeDrawer: React.PropTypes.func,
      replaceRoute: React.PropTypes.func,
      replaceOrPushRoute: React.PropTypes.func,
      pushNewRoute: React.PropTypes.func,
      goBack: React.PropTypes.func,
    }

    renderHeader() {
      const { title, openDrawer, goBack } = this.props;
      return (
        <Header>
          <Button transparent onPress={goBack}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{title}</Title>
          <Button transparent onPress={openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
      )
    }

    renderContent() {
      return <Content><Text>Hello</Text></Content>;
    }

    renderFooter() {
      return (
        <Footer >
          <FooterTab>
            <Button onPress={this.props.openDrawer}>
              Apps
              <Icon name="ios-apps-outline" />
            </Button>
            <Button>
              Camera
              <Icon name="ios-camera-outline" />
            </Button>
            <Button active>
              Navigate
              <Icon name="ios-compass" />
            </Button>
            <Button>
              Contact
              <Icon name="ios-contact-outline" />
            </Button>
          </FooterTab>
        </Footer>
      );
    }

    render() {
      return (
        <Container theme={theme} style={styles.container}>
          {header!=null ? <header/> : this.renderHeader()}
          {content!=null ? (<Content><content/></Content>) : this.renderContent()}
          {footer!=null ? <footer/> : this.renderFooter()}
        </Container>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
    };
  }

  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
      openDrawer: drawerActions.openDrawer,
      closeDrawer: drawerActions.closeDrawer,
      replaceRoute: routeActions.replaceRoute,
      replaceOrPushRoute: routeActions.replaceOrPushRoute,
      pushNewRoute: routeActions.pushNewRoute,
      goBack: routeActions.popRoute,
    }, dispatch),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Screen);
}

