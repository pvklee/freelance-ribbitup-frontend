import React from 'react'
import { Button, Form } from 'semantic-ui-react';
import "../../styles/SidebarForm.css"

const SidebarForm = () => (
  <div className="sidebar-form">
  <Form>
    <Form.Field>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field>
    <Form.TextArea placeholder='Write here...' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </div>
)

export default SidebarForm