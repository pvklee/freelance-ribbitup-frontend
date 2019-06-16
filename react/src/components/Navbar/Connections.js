import React from 'react'
import { Button, Checkbox, List } from 'semantic-ui-react'

const Connections = () => (
  <List divided relaxed>
    <List.Item>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
      <Button circular color='facebook' icon='facebook' />
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
      <Button circular color='twitter' icon='twitter' />
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
      <Button circular color='linkedin' icon='linkedin' />
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
      <Checkbox toggle />
      </List.Content>
      <Button circular color='google plus' icon='google plus' />
    </List.Item>
  </List>
)

export default Connections