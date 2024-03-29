import React, {useContext, createRef, memo, Suspense} from 'react';
import faker from 'faker';
import _,{isEqual} from "lodash"
import "../../styles/Navbar.css"
import logo from '../../styles/images/logo.png';
import Context from '../../containers/Context';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Loading from "../Loading/Loading"
import { Image, Menu, Sidebar, Responsive, Segment, Dropdown, Sticky, Ref, Label} from "semantic-ui-react";
import labels from "../../labels_en.json";
const labelValues = _.values(labels.navbarMenu);
function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
  } 

  const NavBarMobile = (prop) => {
    const {visible,handlePusher,handleToggle,hideSidebar, showSidebar} = useContext(Context);
   
    return (
      <div className='navigation'>
      <Menu fixed="top">
          <Menu.Item>
            <Image size="mini" src={logo} />
          </Menu.Item>
          <Menu.Item onClick={handleToggle} icon={{className:"icon s7-menu2"}}>
          </Menu.Item>
          <Menu.Menu position="right">
          {visible ? <Menu.Item icon={{className:"icon s7-close"}} onClick={hideSidebar}></Menu.Item> : <Menu.Item icon={{className:"icon s7-menu2"}} onClick={showSidebar}></Menu.Item>}
          </Menu.Menu>
        </Menu>
      </div>
  );
  }
  

  const NavBarDesktop = memo((props) => {
    const {visible, hideSidebar, showSidebar, messages, notifications, openMessagesTab, openNotificationsTab} = useContext(Context);
    const Messages = React.lazy(() => import('./Messages'));
    const Connections = React.lazy(() => import('./Connections'));
    const Notifications = React.lazy(() => import('./Notifications'));
    const trigger = (
      <span>
        <Image className="trigger-image" avatar src={faker.internet.avatar()} /> 
      </span>
    );
  

    return(
    <div className='navigation'>
    <Menu fixed="top">
    <Menu.Item header className="brand-name">
      <Image src={logo} centered/>
    </Menu.Item>
      <Menu.Menu position="left">
      <Menu.Item name={labelValues[0].menu} />
      <Dropdown item text={labelValues[1].menu} icon={{className:"angle-down s7-angle-down"}}>
        <Dropdown.Menu className="navbar-drop">
          <Dropdown.Item>  <span className="icon s7-close-circle"></span>Parked</Dropdown.Item>
          <Dropdown.Item>  <span className="icon s7-drawer"></span>Pending</Dropdown.Item>
          <Dropdown.Item> <span className="icon s7-light"></span>In Progress</Dropdown.Item>
          <Dropdown.Item> <span className="icon s7-car"></span>Running</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text={labelValues[2].menu} icon={{className:"angle-down s7-angle-down"}}>
        <Dropdown.Menu className="navbar-drop">
          <Dropdown.Item>  <span className="icon s7-close-circle"></span>Parked</Dropdown.Item>
          <Dropdown.Item>  <span className="icon s7-drawer"></span>Pending</Dropdown.Item>
          <Dropdown.Item> <span className="icon s7-light"></span>In Progress</Dropdown.Item>
          <Dropdown.Item> <span className="icon s7-car"></span>Running</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item name={labelValues[3].menu}/>
      <Menu.Item name={labelValues[4].menu} />
    </Menu.Menu>
    <Menu.Menu position="right">
      <Dropdown item icon={{className:"icon s7-comment message-icon"}} className="message-dropdown-button">
            <Dropdown.Menu className="messages-drop">
            <Dropdown.Item className="messages-drop-title"> Messages {"  "}<Label color='gray'>{messages.length === 0 ? "0" :messages.length}</Label></Dropdown.Item>
              <ErrorBoundary>
                <Suspense fallback={<Loading/>}>
                    <Messages/>
                </Suspense>
              </ErrorBoundary>
            <Dropdown.Item className="view-all" onClick={openMessagesTab}> View All Messages</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item icon={{className:"icon s7-bell message-icon"}} className="message-dropdown-button">
            <Dropdown.Menu className="messages-drop">
            <Dropdown.Item className="messages-drop-title">Notifications{" "}<Label color='gray'>{notifications.length === 0 ? "0":notifications.length}</Label></Dropdown.Item>
            <ErrorBoundary>
                <Suspense fallback={<Loading/>}>
                    <Notifications/>
                </Suspense>
              </ErrorBoundary>
              <Dropdown.Item className="view-all" onClick={openNotificationsTab}>View all Notification</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown selectOnBlur={false} item icon={{className:"icon s7-share message-icon"}} className="message-dropdown-button">
            <Dropdown.Menu className="messages-drop" >
            <Dropdown.Item className="messages-drop-title">Connections</Dropdown.Item>
              <ErrorBoundary>
                  <Suspense fallback={<Loading/>}>
                      <Connections/>
                  </Suspense>
              </ErrorBoundary>
              <Dropdown.Item className="view-all">View all Connections</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item trigger={trigger} icon={{className:"angle-down s7-angle-down reduced-padding-right"}} className="profile-button">
          <Dropdown.Menu className="navbar-drop profile-drop">
              <Dropdown.Item>  <span className="icon s7-user"></span>Profile</Dropdown.Item>
              <Dropdown.Item>  <span className="icon s7-config"></span>Settings</Dropdown.Item>
              <Dropdown.Item> <span className="icon s7-help1"></span>Help</Dropdown.Item>
              <Dropdown.Item> <span className="icon s7-power"></span>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
       {visible ? <Menu.Item icon={{className:"icon reduced-padding-right s7-close"}} onClick={hideSidebar}></Menu.Item> : <Menu.Item icon={{className:"icon reduced-padding-right s7-menu2"}} onClick={showSidebar}></Menu.Item>}
      </Menu.Menu>
     
    </Menu>
    </div>
  );
}, equalityCheck)

  const NavBar = memo((props) => {
    const contextRef = createRef()
      return (
        <div>
           <Responsive {...Responsive.onlyMobile}>
            <NavBarMobile>
            </NavBarMobile>
          </Responsive>
        
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Ref innerRef={contextRef}>
          <Sticky context={contextRef}>
               <NavBarDesktop className="am-top-header" />
          </Sticky>
          </Ref>
           
          </Responsive>
        </div>
      );
    }, equalityCheck)
     
export default NavBar;