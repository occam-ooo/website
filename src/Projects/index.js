import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react';
import './index.css';
import nu from './nu.png';
import withdipp from './withdipp.jpg';
import remy from './remy.png';

export default class Projects extends Component {
    render() {
        return (
            <div className="Projects-container">

                <Item.Group>
                    <Item>
                        <Item.Image
                            className="Projects-item-image"
                            size="tiny"
                            src={nu}
                        />

                        <Item.Content>
                            <Item.Header as="a">
                                Nu - Events. Today.
                            </Item.Header>
                            <Item.Meta>
                                <Icon name="world" size="large" />
                                <Icon name="apple" size="large" />
                                <Icon name="android" size="large" />
                            </Item.Meta>
                            <Item.Description>
                                (c) Occam
                            </Item.Description>
                            <Item.Extra>Own Project. (c) Occam.</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>

                        <Item.Image
                            className="Projects-item-image"
                            size="tiny"
                            src={withdipp}
                        />

                        <Item.Content>
                            <Item.Header as="a">
                                with dipp
                            </Item.Header>
                            <Item.Meta>
                                <a href="https://itunes.apple.com/dk/app/with-dipp/id1165027402?mt=8">
                                    <Icon name="apple" size="large" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.withdipp">
                                    <Icon name="android" size="large" />
                                </a>

                            </Item.Meta>
                            <Item.Description>
                                "Dipp is an engaging way to light up that travel bug in all of us. With a gallery of trending travels coming from your friends and favorite bloggers’ social media feeds around the world, you have the most trusted resources to find your next vacation spot or have a blast where you are."
                            </Item.Description>
                            <Item.Extra>
                                Customer Project. (c)
                                {' '}
                                <a href="http://withdipp.com/">withdipp</a>
                                .
                            </Item.Extra>
                        </Item.Content>

                    </Item>

                    <Item>
                        <Item.Image
                            className="Projects-item-image"
                            size="tiny"
                            src={remy}
                        />
                        <Item.Content>
                            <Item.Header as="a">
                                Remy – Your Restaurant Assistant
                            </Item.Header>
                            <Item.Meta>
                                <a href="https://mobilabsolutions.com/remy-your-restaurant-assistant/">
                                    <Icon name="apple" size="large" />
                                </a>

                            </Item.Meta>
                            <Item.Description>
                                "Remy is an iOS Application which aims to provide restaurant owners deep insights into their online competition environment and to improve their online presence.".
                            </Item.Description>
                            <Item.Extra>
                                Customer Project. (c)
                                {' '}
                                <a href="https://mobilabsolutions.com/">
                                    Mobilab solutions
                                </a>.
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                </Item.Group>

            </div>
        );
    }
}
