import React,{memo} from "react";
import faker from 'faker';
import {isEqual} from "lodash";
import {List, Image} from 'semantic-ui-react';
import '../../styles/RecentList.css';

const RecentList = memo((props) => {
    return (
        <div className="recent">
        <List relaxed>
            <List.Item>
            <Image avatar src={faker.internet.avatar()}  />
            <List.Content>
                <List.Header as='a'>Daniel Louise</List.Header>
                <List.Description>
                Last seen watching...
                </List.Description>
            </List.Content>
            </List.Item>
            <List.Item>
            <Image avatar src={faker.internet.avatar()} />
            <List.Content>
                <List.Header as='a'>Stevie Feliciano</List.Header>
                <List.Description>
                Last seen watching...
                </List.Description>
            </List.Content>
            </List.Item>
      </List>
      </div>
    )
},equalityCheck)

function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 
export default RecentList;