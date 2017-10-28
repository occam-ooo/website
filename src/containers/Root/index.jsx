import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Visibility
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Footer from '../../components/Footer';
import CustomHeader from '../../components/Header';
import bg from './bg_own_1.png';
import bg2 from './bg_new_2.jpg';
import logo from './logo.svg';
import nu from '../Projects/nu.png';
import kbo from '../Projects/kbo.png';
import withdipp from '../Projects/withdipp.jpg';
import './index.css';
import { ROUTE_ABOUT, ROUTE_PROJECTS } from '../../services/navigation/routes';

export default class Home extends Component {
  render() {
    return (
      <div className="Root-container">

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >

          <CustomHeader {...this.props} />
          <div style={{ height: '100vh' }}>
            <Parallax blur={9} bgImage={bg} strength={900} className="logo_main">
              <Container
                text
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '100vh'
                }}
              >

                <Image src={logo} centered verticalAlign="bottom" size="medium" />

                <Header
                  as="h1"
                  content="We develop MVPs*."
                  inverted
                  style={{
                    fontSize: '3.7vh',
                    fontWeight: '300',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '5px',

                    padding: '30px 50px'
                  }}
                />
              </Container>
            </Parallax>
          </div>

        </Visibility>

        <Segment style={{ padding: '14em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Time and energy where it matters.
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  When starting a company or
                  just launching the first version of a product,
                  you want to spend all your efforts where it matters.
                  Recruiting is usually an expensive and long task,
                  so Occam.ooo has a team ready to get your product started
                  as soon as possible. At the same time we develop your product,
                  you build your business.
                </p>
              </Grid.Column>
              <Grid.Column textAlign="center" width={8}>
                <Link to={ROUTE_ABOUT}>
                  <Button inverted size="huge">How it works</Button>
                </Link>
              </Grid.Column>

            </Grid.Row>
            <Grid.Row />
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em 0em' }} vertical>
          <Parallax blur={10} bgImage={bg2} strength={900} className="parallax-2-content">
            <Grid container stackable className="parallax-2" verticalAlign="middle">
              <Grid.Row>
                <Grid.Column>
                  <Header as="h3" style={{ fontSize: '2em' }}>
                    Let{"'"}s get your product{"'"}s first version launched.
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    While you bootstrap a company or a team, we’re building your
                    MVP. Occam.ooo is a software development company that
                    assembles a team so that you can get your Minimum Viable
                    Product out there in a snap.

                  </p>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Parallax>
        </Segment>

        <ThreeProjects />

        <Footer />
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

          <p style={{ fontSize: '1.33em' }}><Icon name="android" /><Icon name="apple" /></p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Image src={withdipp} centered size="small" shape="circular" />
          <Header as="h3" style={{ fontSize: '2em' }}>
            withDipp
          </Header>

          <p style={{ fontSize: '1.33em' }}>
            <Icon name="android" /><Icon name="apple" />
          </p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Image src={kbo} centered size="small" shape="circular" />
          <Header as="h3" style={{ fontSize: '2em' }}>
            Karnov Business Optimizer
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            <Icon name="world" />
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Link to={ROUTE_PROJECTS}>
            <Button inverted size="huge">More projects</Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
