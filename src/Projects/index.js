import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react';
import './index.css';

import data from './data.Projects';

export default class Projects extends Component {
    render() {
        return (
            <div className="Projects-container">
                <Item.Group>

                    {data.map((project, index) => (
                        <Item key={`project-${index}`}>
                            <Item.Image className="Projects-item-image" size="tiny" src={project.image} />

                            <Item.Content>
                                <Item.Header as="a">
                                    {project.header}
                                </Item.Header>

                                {project.icons.map((icon, indexIcon) => {
                                    return (
                                        <Item.Meta key={`icon-${indexIcon}`}>
                                            <a href={icon.url}>
                                                <Icon name={icon.type} size="large" />
                                            </a>
                                        </Item.Meta>
                                    );
                                })}

                                <Item.Description>
                                    {project.description}
                                </Item.Description>
                                <Item.Extra>{project.owner} <a href={project.url}>{project.urlName}</a></Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}

                </Item.Group>

            </div>
        );
    }
}
