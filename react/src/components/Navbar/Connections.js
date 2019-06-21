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
    <List.Item className="connections-item" onClick={e => e.stopPropagation()}>
      <Image className="connections-image" src={github}/>
      <List.Content>
        <List.Header>GitHub</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
    </List.Item>

    <List.Item className="connections-item" onClick={e => e.stopPropagation()}>
    <Image className="connections-image" src={bitbucket} centered/>
      <List.Content>
        <List.Header>Bit Bucket</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
    </List.Item>

    <List.Item className="connections-item" onClick={e => e.stopPropagation()}>
    <Image className="connections-image" src={slack} centered/>
      <List.Content>
        <List.Header>Slack</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox  toggle />
      </List.Content>
    </List.Item>

    <List.Item className="connections-item"onClick={e => e.stopPropagation()}>
    <Image className="connections-image" src={dribbble} centered/>
      <List.Content>
        <List.Header>Dribbble</List.Header>
      </List.Content>
      <List.Content floated='right'>
      <Checkbox toggle/>
      </List.Content>
    </List.Item>
  </List>
</div>
)

export default Connections