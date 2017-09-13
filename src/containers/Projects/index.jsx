import React from 'react';
import { Item, Icon } from 'semantic-ui-react';
import Header from '../../components/Header';
import './index.css';

import data from './data.Projects';

const Projects = () => (
  <div>
    <Header />
    <div className="Projects-container">
      <Item.Group>
        {data.map(project => (
          <Item key={`project-${project.id}`}>
            <Item.Image className="Projects-item-image" size="tiny" src={project.image} />

            <Item.Content>
              <Item.Header as="a">{project.header}</Item.Header>

              {project.icons.map(icon => (
                <Item.Meta key={`icon-${icon.id}`}>
                  <a href={icon.url}>
                    <Icon name={icon.type} size="large" />
                  </a>
                </Item.Meta>
              ))}

              <Item.Description>{project.description}</Item.Description>
              <Item.Extra>
                {project.owner} <a href={project.url}>{project.urlName}</a>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  </div>
);

export default Projects;
