import React,{useContext} from 'react';
import { List } from 'semantic-ui-react';
import _ from "lodash";
import Context from "../../containers/Context";
import "../../styles/Notifications.css";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const Notifications = () => {
  const {notifications} = useContext(Context);
  return(
  <div className="notifications">
    <PerfectScrollbar className="scroller" options={{wheelPropagation: false}}>
  <List divided relaxed>
    {notifications.length > 0 && _.map(notifications, (keys, value)=>
    <List.Item key={keys.id}>
        <List.Icon className={"icon s7-pin shade"} />
      <List.Content>
        <List.Header>{keys.from}</List.Header>
        <List.Description>{keys.message}</List.Description>
      </List.Content>
    </List.Item>
    )}
  </List>
  </PerfectScrollbar>
  </div>
)}
export default Notifications