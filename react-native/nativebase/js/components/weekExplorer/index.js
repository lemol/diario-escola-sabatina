
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, Footer, FooterTab } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class BlankPage extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Lição #3</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Text>
            Aqui vao as coisas ano as {name} {this.props.name}
          </Text>
        </Content>

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
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(BlankPage);
