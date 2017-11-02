import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Grid, List, Header, Flag } from 'semantic-ui-react';
import { ROUTE_ROOT, ROUTE_ABOUT, ROUTE_PROJECTS } from '../../services/navigation/routes';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Go to" />
            <List link inverted>
              <List.Item as="a" onClick={() => window.scrollTo(0, 0)}>
                <Link to={ROUTE_ROOT}>Home</Link>
              </List.Item>
              <List.Item as="a"><Link to={ROUTE_PROJECTS}>Projects</Link></List.Item>
              <List.Item as="a"><Link to={ROUTE_ABOUT}>About</Link></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Contact" />
            <List link inverted>
              <List.Item>Occam</List.Item>
              <List.Item>Vesterbrogade 26</List.Item>
              <List.Item>1620 Copenhagen V</List.Item>
              <List.Item>Denmark <Flag name="denmark" /></List.Item>
              <List.Item>CVR 35128727</List.Item>
              <List.Item as="a">hello@occam.ooo</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              * What is a MVP?
            </Header>
            <List link inverted>
              <List.Item>Minimum viable product.</List.Item>
              <List.Item>Minimum valuable product. </List.Item>
              <List.Item>Most valuable product. </List.Item>
            </List>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
