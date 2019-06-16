import React,{memo} from "react";
import {isEqual} from "lodash";
import {List, Image} from 'semantic-ui-react';
import '../../styles/RecentList.css';

const ContactList = memo((props) => {
    return (
        <div className="recent">
        <List relaxed>
            <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
            <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
            </List.Content>
            </List.Item>
      </List>
      </div>
    )
},equalityCheck)

function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 
export default ContactList;