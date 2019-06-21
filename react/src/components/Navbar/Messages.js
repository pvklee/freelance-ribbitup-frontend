import React,{useContext} from 'react';
import faker from 'faker';
import { Image, List } from 'semantic-ui-react';
import "../../styles/Messages.css";
import _ from "lodash";
import Context from "../../containers/Context";


const Messages = () => {
    const {messages} = useContext(Context);
    return (
    <div className="messages">
        <List divided relaxed>
            
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
  </div>
 )
}

export default Messages