import React,{useContext} from 'react';
import { List } from 'semantic-ui-react';
import _ from "lodash";
import Context from "../../containers/Context";
import "../../styles/Notifications.css";

const Notifications = () => {
  const {notifications} = useContext(Context);
  return(
  <div className="notifications">
  <List divided relaxed>
    {notifications.length > 0 && _.map(notifications, (keys, value)=>
    <List.Item key={keys.id}>
        <List.Icon className={"icon s7-pin shade"} />
      <List.Content>
        <List.Header as='a'>{keys.from}</List.Header>
        <List.Description as='a'>{keys.message}</List.Description>
      </List.Content>
    </List.Item>
    )}
  </List>
  </div>
)}
export default Notifications