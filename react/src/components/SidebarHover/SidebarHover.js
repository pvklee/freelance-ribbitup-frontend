import React, { useContext,memo} from "react";
import Context from "../../containers/Context";
import _ , {isEqual} from "lodash";
import {List} from "semantic-ui-react";
import "../../styles/SidebarHover.css";
import labels from "../../labels_en.json";


const SidebarHover = memo((props) => {
  const {isHovering, setHover, removeHover} = useContext(Context);
  const labelValues = _.values(labels.leftSidebarHover);
  const filterdMenu = _.filter( labelValues, (value) => { return value.menu.toLowerCase() === isHovering.target});
  const items = _.map(filterdMenu[0].submenu, (value) => value);
  // console.log("items",items);


    return (
      <div className="sidebar-hover" onMouseEnter={setHover} onMouseLeave={removeHover}>
        <div className="title">{filterdMenu[0].menu}</div>
        <List>
        {_.map(items, (value) => 
          {
            return _.map(value, (keys,index) => (index === "heading" && keys.length !== 0) ? <div key={`x-${keys.id}`}><div className="hover-title">{keys}</div></div> : index === "links" ? <div className="hover-items" key={`x-${value}`}> {_.map(keys,(indx,value)=><List.Item className="hover-links" key={`y-${value}`}>{indx}</List.Item>)}</div>:""
              )
            } 
        )}
        </List>
      </div>    
    );
  },equalityCheck)

  function equalityCheck(prevProps, nextProps) {
    return isEqual(prevProps, nextProps)
    } 

export default SidebarHover;