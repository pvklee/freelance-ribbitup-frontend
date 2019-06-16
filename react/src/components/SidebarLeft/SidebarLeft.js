import React ,{useContext, memo} from 'react';
import {Menu,Icon} from 'semantic-ui-react';
import {isEqual} from "lodash";
import "../../styles/SidebarLeft.css";
import SidebarHover from "../SidebarHover/SidebarHover";
import Context from '../../containers/Context';

const SidebarLeft = memo((props) => {
  const {activeItem, handleItemClick,setHover, isHovering} = useContext(Context);
   return(
     <div>
    {isHovering.hover && <SidebarHover/>}
     <aside className="sidebar-left">
        <Menu pointing secondary vertical>
        <Menu.Item name='dashboard'  data-name="dashboard" active={activeItem === 'dashboard'} onClick={handleItemClick} onMouseEnter={setHover} >
          <Icon className="icon s7-monitor" /><br/><br/>
          Dashboard
        </Menu.Item>
       
        <Menu.Item name='organization' data-name="organization"  active={activeItem === 'organisation'} onClick={handleItemClick} onMouseEnter={setHover}>
          <Icon className="icon s7-diamond" /><br/><br/>
          Organisation
        </Menu.Item>

        <Menu.Item name='output' data-name="output" active={activeItem === 'output'} onClick={handleItemClick} onMouseEnter={setHover}>
          <Icon className="icon s7-graph" /><br/><br/>
          Output
        </Menu.Item>
        <Menu.Item name='services' data-name="services" active={activeItem === 'services'} onClick={handleItemClick} onMouseEnter={setHover}>
          <Icon className="icon s7-box2" /><br/><br/>
          Services
        </Menu.Item>
        <Menu.Item name='messages'  data-name="messages" active={activeItem === 'messages'} onClick={handleItemClick} onMouseEnter={setHover}>
          <Icon className="icon s7-mail" /><br/><br/>
          Messages
        </Menu.Item>
        <Menu.Item name='audit' data-name="audit" active={activeItem === 'audit'} onClick={handleItemClick} onMouseEnter={setHover}>
          <Icon className="icon s7-note2" /><br/><br/>
          Audit
        </Menu.Item>
        <Menu.Item name='map' data-name="map" active={activeItem === 'map'} onClick={handleItemClick} onMouseEnter={setHover}>
          <Icon className="icon s7-map-marker" /><br/><br/>
          Map
        </Menu.Item>
      </Menu>
     </aside>
     </div>
   )
},equalityCheck)

function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 

export default SidebarLeft;