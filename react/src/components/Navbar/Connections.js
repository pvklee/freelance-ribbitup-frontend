import React from 'react'
import dribbble from '../../styles/images/dribbble.png';
import slack from '../../styles/images/slack.png';
import bitbucket from '../../styles/images/bitbucket.png';
import github from '../../styles/images/github.png';
import {Checkbox, List, Image} from 'semantic-ui-react';
import "../../styles/Connections.css";

const Connections = () => (
  <div className="connections">
  <List divided relaxed>
    <List.Item>
    <Image size="mini" src={github} centered/>
      <List.Content>
        <List.Header as='a'>GitHub</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
    </List.Item>

    <List.Item>
    <Image size="mini" src={bitbucket} centered/>
      <List.Content>
        <List.Header as='a'>Bit Bucket</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
    </List.Item>

    <List.Item>
    <Image size="mini" src={slack} centered/>
      <List.Content>
        <List.Header as='a'>Slack</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
    </List.Item>

    <List.Item>
    <Image size="mini" src={dribbble} centered/>
      <List.Content>
        <List.Header as='a'>Dribbble</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
    </List.Item>
  </List>
</div>
)

export default Connections