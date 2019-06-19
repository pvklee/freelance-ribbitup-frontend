import React,{useContext,memo} from 'react';
import faker from 'faker';
import _, {isEqual} from "lodash";
import {Menu, Segment, Sidebar, Card, Tab, Header, Input } from 'semantic-ui-react';
import AnnouncementList from "./AnnouncementList"
import RecentList from "./RecentList";
import ContactList from "./ContactList";
import SidebarForm from "./SidebarForm"
import Context from '../../containers/Context';
import Bugs from "./Bugs";

import "../../styles/SidebarRight.css";
import labels from "../../labels_en.json";

const SidebarRight = memo((props) => {
  const {visible} = useContext(Context);
  const labelValues = _.values(labels.rightSidebar);

  const meta =(
    <span className="status"></span>
  )
  const panes = [
    { "menuItem": { key: 'users', icon:{className:"angle-down s7-smile"}}, render: () => <Tab.Pane  attached={false}> <div className="tab-content"><Header as='h3'>{labelValues[0].menu}</Header><AnnouncementList/></div></Tab.Pane> },
    { "menuItem": { key: 'messages', icon:{className:"angle-down s7-chat"}}, render: () => <Tab.Pane  attached={false}> <div className="tab-content"> <Header as='h3'>{labelValues[1].menu}</Header><RecentList/> <Header as='h3'>Contacts</Header> <ContactList/> </div></Tab.Pane>  },
    { "menuItem": { key: 'view', icon:{className:"angle-down s7-look"}}, render: () => <Tab.Pane  attached={false}>  <div className="tab-content"><Header as='h3'>{labelValues[2].menu}</Header><Bugs/></div></Tab.Pane> },
    { "menuItem": { key: 'edit', icon:{className:"angle-down s7-pen"}}, render: () => <Tab.Pane attached={false}> <div className="tab-content"> <Header as='h3'>{labelValues[3].menu}</Header><SidebarForm label={labelValues[3].button}/> </div></Tab.Pane> },
    { "menuItem": { key: 'support', icon:{className:"angle-down s7-ticket"}}, render: () => <Tab.Pane attached={false}> <div className="tab-content"> <Header as='h3'>{labelValues[4].menu}</Header><SidebarForm label={labelValues[4].button}/> </div></Tab.Pane> },
  ]
    return (
        <div className="sidebar-right">
          <div className={`sidebar-pushable${visible ? ' sidebar-pushable-visible' : ''}`}>
            <Sidebar
              as={Menu}
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
              <Input size='large' className="search" icon={{className:"s7-search"}} placeholder='Search...' />
            </Sidebar>
            {props.children}
          </div>
        </div>
    )
}, equalityCheck)
function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 

export default SidebarRight;