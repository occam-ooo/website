import React from 'react';
import { Item, Icon, Header as SemanticHeader } from 'semantic-ui-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';

import data from './data.Projects';

const Projects = ({ ...props }) => (
  <div>
    <Header {...props} />
    <div className="Projects-container">
      <Item.Group>
        {data.map(project => (
          <Item key={`project-${project.id}`}>
            <Item.Image className="Projects-item-image" size="tiny" src={project.image} />

            <Item.Content>
              <Item.Header as="a">
                <SemanticHeader as="h2">{project.header}</SemanticHeader>
              </Item.Header>

              <div className="Projects-icons">
                {project.icons.map(icon => (
                  <Item.Meta key={`icon-${icon.id}`}>
                    <a href={icon.url}>
                      <Icon name={icon.type} size="large" />
                    </a>
                  </Item.Meta>
                ))}
              </div>

              <Item.Description>
                <p>{project.description}</p>
              </Item.Description>
              <Item.Extra>
                {project.owner} <a href={project.url}>{project.urlName}</a>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
    <Footer />
  </div>
);

export default Projects;
