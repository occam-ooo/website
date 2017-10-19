import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react';
import bg from './bg_new_1.jpg';
import bg2 from './bg_new_2.jpg';
import nu from '../Projects/nu.png';
import logo from './logo.svg';
import withdipp from '../Projects/withdipp.jpg';
import { Parallax } from 'react-parallax';
import CustomHeader from '../../components/Header';

import { Link } from 'react-router-dom';
import { ROUTE_ROOT, ROUTE_ABOUT, ROUTE_PROJECTS } from '../../services/navigation/routes';

export default class HomepageLayout extends Component {
  render() {
    return (
      <div>
        <Visibility onBottomPassed={this.showFixedMenu} onBottomVisible={this.hideFixedMenu} once={false}>
          <Segment inverted textAlign="center" style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <CustomHeader {...this.props} />
            <Parallax blur={5} bgImage={bg2} bgHeight={700} strength={400}>
              <Container text>
                <Image src={logo} centered verticalAlign="bottom" size="medium" />
                <Header
                  as="h1"
                  content="Occam.ooo"
                  inverted
                  style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em'
                  }}
                />
                <Header
                  as="h2"
                  content="We develop MVP's."
                  inverted
                  style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                />
              </Container>
            </Parallax>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Let's get your company started.
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  While you bootstrap a company or a team, we’re building your
                  MVP. Occam.ooo is a software development company that
                  assembles a team so that you can get your Minimum Viable
                  Product out there in a snap.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="large" src={logo} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Parallax blur={5} bgImage={bg} bgHeight={400} strength={400}>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column>
                  <Header as="h3" style={{ fontSize: '2em' }}>
                    Let's get your company started.
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    While you bootstrap a company or a team, we’re building your
                    MVP. Occam.ooo is a software development company that
                    assembles a team so that you can get your Minimum Viable
                    Product out there in a snap.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button size="huge">Check Them Out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Parallax>
        </Segment>

        <ThreeProjects />

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Contact" />
                  <List link inverted>
                    <List.Item>Occam</List.Item>
                    <List.Item>Vesterbro</List.Item>
                    <List.Item>Denmark (flag)</List.Item>
                    <List.Item as="a">hello@occam.ooo</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

const ThreeProjects = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Image src={nu} centered size="small" shape="circular" />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Nu
          </Header>

          <p style={{ fontSize: '1.33em' }}>Icones</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Image src={withdipp} centered size="small" shape="circular" />
          <Header as="h3" style={{ fontSize: '2em' }}>
            withDipp
          </Header>
          <p style={{ fontSize: '1.33em' }}>Icons</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Karnov Business Optimizer
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            That is what they all say about us
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button size="huge">More projects</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
