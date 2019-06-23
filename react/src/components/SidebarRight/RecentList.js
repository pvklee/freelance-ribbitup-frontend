import React,{memo} from "react";
import faker from 'faker';
import {isEqual} from "lodash";
import {List, Image} from 'semantic-ui-react';
import '../../styles/RecentList.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const RecentList = memo((props) => {
    return (
        <div className="recent">
        <PerfectScrollbar className="scroller" options={{wheelPropagation: false}}>
            <List>
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
        </PerfectScrollbar>
      </div>
    )
},equalityCheck)

function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 
export default RecentList;