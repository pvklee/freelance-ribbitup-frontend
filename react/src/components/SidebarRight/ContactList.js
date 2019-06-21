import React,{memo} from "react";
import faker from 'faker';
import {isEqual} from "lodash";
import {List, Image, Input} from 'semantic-ui-react';
import '../../styles/RecentList.css';

const ContactList = memo((props) => {
    return (
        <div className="recent">
        <List relaxed className="contacts-list">
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
            </List.Content>
            </List.Item>

            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
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