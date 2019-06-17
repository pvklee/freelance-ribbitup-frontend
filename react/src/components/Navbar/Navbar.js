import React, {useContext, createRef, memo, Suspense} from 'react';
import faker from 'faker';
import {isEqual} from "lodash"
import "../../styles/Navbar.css"
import logo from '../../styles/images/logo.png';
import Context from '../../containers/Context';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Loading from "../Loading/Loading"
import { Image, Menu, Sidebar, Responsive, Segment, Dropdown, Sticky, Ref, Label} from "semantic-ui-react";
  

  const NavBarMobile = (prop) => {
    const {visible,handlePusher,handleToggle,hideSidebar, showSidebar} = useContext(Context);
   
    return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={hideSidebar}
        vertical
        visible={visible}
      >
      </Sidebar>

      <Sidebar.Pusher
        dimmed={visible}
        onClick={handlePusher}
        style={{ minHeight: "100vh" }}
      > 
      <Menu>
          <Menu.Item>
            <Image size="mini" src={logo} />
          </Menu.Item>
          <Menu.Item onClick={handleToggle} icon={{className:"icon s7-menu2"}}>
          </Menu.Item>
          <Menu.Menu position="right">
          {visible ? <Menu.Item icon={{className:"icon s7-close"}} onClick={hideSidebar}></Menu.Item> : <Menu.Item icon={{className:"icon s7-menu2"}} onClick={showSidebar}></Menu.Item>}
          </Menu.Menu>
        </Menu>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
  }
  

  const NavBarDesktop = memo((props) => {
    const {visible, hideSidebar, showSidebar, messages, notifications} = useContext(Context);
    const Messages = React.lazy(() => import('./Messages'));
    const Connections = React.lazy(() => import('./Connections'));
    const Notifications = React.lazy(() => import('./Notifications'));
    const trigger = (
      <span>
        <Image avatar src={faker.internet.avatar()} /> 
      </span>
    );
    return(
    <div className="navigation">
    <Menu fixed="top">
    <Menu.Item header className="brand-name">
      <Image src={logo} centered/>
    </Menu.Item>
      <Menu.Menu position="left">
        <Menu.Item name="Home" />
        <Dropdown item text='My Plan' icon={{className:"angle-down s7-angle-down"}}>
              <Dropdown.Menu className="navbar-drop">
                <Dropdown.Item>  <span className="icon s7-close-circle"></span>Parked</Dropdown.Item>
                <Dropdown.Item>  <span className="icon s7-drawer"></span>Pending</Dropdown.Item>
                <Dropdown.Item> <span className="icon s7-light"></span> In Progress</Dropdown.Item>
                <Dropdown.Item> <span className="icon s7-car"></span>Running</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='My Apps' icon={{className:"angle-down s7-angle-down"}}>
              <Dropdown.Menu className="navbar-drop">
                <Dropdown.Item>  <span className="icon s7-close-circle"></span>Parked</Dropdown.Item>
                <Dropdown.Item>  <span className="icon s7-drawer"></span>Pending</Dropdown.Item>
                <Dropdown.Item> <span className="icon s7-light"></span> In Progress</Dropdown.Item>
                <Dropdown.Item> <span className="icon s7-car"></span>Running</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item name="Help" />
            <Menu.Item name="Service Health" />
      </Menu.Menu>
      

      <Menu.Menu position="right">
      <Dropdown item icon={{className:"icon s7-comment"}}>
            <Dropdown.Menu className="messages-drop navbar-drop">
            <Dropdown.Item> Messages {"  "}<Label color='red'>{messages.length === 0?"0":messages.length}</Label></Dropdown.Item>
            
              <ErrorBoundary>
                <Suspense fallback={<Loading/>}>
                    <Messages/>
                </Suspense>
              </ErrorBoundary>

            <Dropdown.Item> View All Messages</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item icon={{className:"icon s7-bell"}}>
            <Dropdown.Menu className="navbar-drop messages-drop">
            <Dropdown.Item>Notifications{" "}<Label color='red'>{notifications.length === 0?"0":notifications.length}</Label></Dropdown.Item>
            <ErrorBoundary>
                <Suspense fallback={<Loading/>}>
                    <Notifications/>
                </Suspense>
              </ErrorBoundary>
              <Dropdown.Item>Veiw all Notification</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item icon={{className:"icon s7-share"}}>
            <Dropdown.Menu className="navbar-drop">
            <Dropdown.Item>Connections</Dropdown.Item>
              <ErrorBoundary>
                  <Suspense fallback={<Loading/>}>
                      <Connections/>
                  </Suspense>
              </ErrorBoundary>
              <Dropdown.Item>View all Connections</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item trigger={trigger} icon={{className:"angle-down s7-angle-down"}}>
          <Dropdown.Menu className="navbar-drop">
              <Dropdown.Item>  <span className="icon s7-user"></span>Profile</Dropdown.Item>
              <Dropdown.Item>  <span className="icon s7-config"></span>Settings</Dropdown.Item>
              <Dropdown.Item> <span className="icon s7-help1"></span> Help</Dropdown.Item>
              <Dropdown.Item> <span className="icon s7-power"></span>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
       {visible ? <Menu.Item icon={{className:"icon s7-close"}} onClick={hideSidebar}></Menu.Item> : <Menu.Item icon={{className:"icon s7-menu2"}} onClick={showSidebar}></Menu.Item>}
      </Menu.Menu>
     
    </Menu>
    </div>
  );
}, equalityCheck)

function equalityCheck(prevProps, nextProps) {
  console.log("Navbar.js", isEqual(prevProps, nextProps));
  return isEqual(prevProps, nextProps)
  } 

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