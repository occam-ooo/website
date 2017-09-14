import React from 'react';
import { Item, Container, Header as TextHeader } from 'semantic-ui-react';
import Header from '../../components/Header';
import './index.css';

/* eslint-disable */
const About = ({ ...props }) => {
  return (
    <div className="About-container">
      <Header {...props} />
      <Container text>
        <Item.Group>
          <Item.Content>
            <Item.Header>
              <TextHeader as="h2">What is Occam.ooo?</TextHeader>
            </Item.Header>
            <Item.Description>
              <p>
                Occam.ooo is an agency that builds and maintains mobile and web
                projects. It is built from zero by a single independent
                developer and an organically grown company, dismissing external
                funding thus allowing for full control of design, process and
                management.
              </p>
            </Item.Description>
          </Item.Content>
          <Item.Content>
            <Item.Header>
              <TextHeader as="h2">Why choose Occam.ooo?</TextHeader>
            </Item.Header>
            <Item.Description>
              <p>
                Occam.ooo has full control over the power of decision for its
                management decisions. This allows freedom for the client and our
                focus on developing the best product possible. Occam.ooo’s also
                has a control of quality for its products based on strict coding
                guidelines. This ensures maintainability, scalability and
                provides the opportunity to handover projects without steep
                learning curves.
              </p>
            </Item.Description>
          </Item.Content>

          <Item.Content>
            <Item.Header>
              <TextHeader as="h2">How does Occam.ooo work?</TextHeader>
            </Item.Header>
            <Item.Description>
              <p>
                Occam.ooo works as a collaboration of several independent
                developers, project managers and designers that work as a
                team-on-demand to build and deliver software products.
              </p>
            </Item.Description>
          </Item.Content>
        </Item.Group>
      </Container>
    </div>
  );
};

export default About;
