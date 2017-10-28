import React from 'react';
import { Item, Header as TextHeader } from 'semantic-ui-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';

/* eslint-disable */
const About = ({ ...props }) => {
  return (
    <div>
      <Header {...props} />
      <div className="About-container">

        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>
                <TextHeader as="h2">What is Occam.ooo?</TextHeader>
              </Item.Header>
              <Item.Description>
                <p>

                  Occam.ooo is an agency that builds mobile and web
                  minimum viable products.

                </p>

                <p>

                  At its core, Occam.ooo is an employee-first, organically grown company. It started with one employee with a simple goal: growing a company from zero where its own collaborators are the most important.
                </p>
                <p>
                  At Occam.ooo, we believe that the employees' and collaborators' well-being is the formula for the best product possible.
                </p>

              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
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

                <p>
                  We also use the most common programming language in the world: Javascript. Thus, it is easier to find developers when the handover proccess occurs.
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
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
          </Item>
        </Item.Group>

      </div>
      <Footer />
    </div>
  );
};

export default About;
