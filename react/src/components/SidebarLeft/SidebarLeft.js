import React ,{useContext, memo} from 'react';
import {Menu,Icon} from 'semantic-ui-react';
import _ ,{isEqual} from "lodash";
import "../../styles/SidebarLeft.css";
import SidebarHover from "../SidebarHover/SidebarHover";
import Context from '../../containers/Context';
import labels from "../../labels_en.json";

const SidebarLeft = memo((props) => {
  const {activeItem, handleItemClick,setHover, isHovering} = useContext(Context);
  const labelValues = _.values(labels.leftSideBar);
   return(
     <div>
    {isHovering.hover && <SidebarHover/>}
     <aside className="sidebar-left">
     {_.map(labelValues, (key, value) => 
          <Menu pointing secondary vertical key={key.id}>
          <Menu.Item name={key.menu.toLowerCase()}  data-name={key.menu.toLowerCase()}  active={activeItem === key.menu.toLowerCase()} onClick={handleItemClick} onMouseEnter={setHover} >
            <Icon className={key.icon}/><br/><br/>
            {key.menu} 
          </Menu.Item>
        </Menu>
       )}
     </aside>
     </div>
   )
},equalityCheck)

function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 

export default SidebarLeft;