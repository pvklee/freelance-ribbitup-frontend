import React,{useContext,memo} from 'react';
import faker from 'faker';
import {isEqual} from "lodash";
import {Menu, Segment, Sidebar, Card, Tab, Header, Input } from 'semantic-ui-react';
import AnnouncementList from "./AnnouncementList"
import RecentList from "./RecentList";
import ContactList from "./ContactList";
import SidebarForm from "./SidebarForm"
import Context from '../../containers/Context';
import Bugs from "./Bugs";

import NavBar from '../Navbar/Navbar';

import "../../styles/SidebarRight.css";

const SidebarRight = memo((props) => {
  const {visible} = useContext(Context);

  const meta =(
    <span className="status"></span>
  )
  const panes = [
    { "menuItem": { key: 'users', icon:{className:"angle-down s7-smile"}}, render: () => <Tab.Pane attached={false}> <Header as='h3'>Announcement</Header><AnnouncementList/></Tab.Pane> },
    { "menuItem": { key: 'messages', icon:{className:"angle-down s7-chat"}}, render: () => <Tab.Pane attached={false}> <Header as='h3'>Recent</Header><RecentList/> <Header as='h3'>Contacts</Header> <ContactList/></Tab.Pane> },
    { "menuItem": { key: 'view', icon:{className:"angle-down s7-look"}}, render: () => <Tab.Pane attached={false}> <Header as='h3'>Bugs</Header><Bugs/> <Input size='large' className="search" icon={{className:"s7-search"}} placeholder='Search...' /></Tab.Pane> },
    { "menuItem": { key: 'edit', icon:{className:"angle-down s7-pen"}}, render: () => <Tab.Pane attached={false}> <Header as='h3'>New Enhancement</Header><SidebarForm/> <Input size='large' className="search" icon={{className:"s7-search"}} placeholder='Search...' /></Tab.Pane> },
    { "menuItem": { key: 'support', icon:{className:"angle-down s7-ticket"}}, render: () => <Tab.Pane attached={false}> <Header as='h3'>New Support Ticket</Header><SidebarForm/> <Input size='large' className="search" icon={{className:"s7-search"}} placeholder='Search...' /></Tab.Pane> },
  ]
    return (
        <div className="sidebar-right"> 
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            direction='right'
            inverted
            vertical
            visible={visible}
          >
            <Card className="user-info"
                  image={faker.internet.avatar()}
                  header='Elliot Baker'
                  meta={meta}
                  description='Director'
                />
              <Tab menu={{ text: true }} panes={panes} />
          </Sidebar>
          <Sidebar.Pusher>
              {props.children}
          </Sidebar.Pusher>

        </Sidebar.Pushable>
        </div>
    )
}, equalityCheck)
function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 

export default SidebarRight;