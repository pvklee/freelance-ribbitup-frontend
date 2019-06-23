import React,{useContext} from 'react';
import faker from 'faker';
import { Image, List } from 'semantic-ui-react';
import "../../styles/Messages.css";
import _ from "lodash";
import Context from "../../containers/Context";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const Messages = () => {
    const {messages} = useContext(Context);

    return (
    <div className="messages" >
        <PerfectScrollbar className="scroller" options={{wheelPropagation: false}}>
            <List divided relaxed >
                {messages.length > 0 &&_.map(messages,(keys, value)=>
                    <List.Item key={keys.id}>
                        <Image avatar src={faker.internet.avatar()} />
                        <List.Content>
                        <List.Header>{keys.from}</List.Header>
                        <List.Description>
                            {keys.message}
                        </List.Description>
                        </List.Content>
                    </List.Item> 
                )}
            </List>
        </PerfectScrollbar>
  </div>
 )
}

export default Messages