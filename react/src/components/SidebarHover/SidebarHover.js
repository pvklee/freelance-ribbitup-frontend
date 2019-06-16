import React, { useContext,memo} from "react";
import Context from "../../containers/Context";
import _ , {isEqual} from "lodash";
import random from "random";
import {List} from "semantic-ui-react";
import "../../styles/SidebarHover.css";
import labels from "../../sidebar-labels.json"


const SidebarHover = memo((props) => {
  const {isHovering, setHover, removeHover} = useContext(Context);
  const labelValues = _.values(labels);
  const filterdMenu = _.filter( labelValues, (value) => { return value.menu.toLowerCase() === isHovering.target});
  const items = _.map(filterdMenu[0].submenu, (value) => value);
  // console.log("items",items);


    return (
      <div className="sidebar-hover" onMouseEnter={setHover} onMouseLeave={removeHover}>
        <div className="title">{filterdMenu[0].menu}</div>
        <List>
        {_.map(items, (value) => 
          {
            return _.map(value, (keys,index) => index === "heading" ? <div key={random.int(0, 100)}><div className="hover-title">{keys}</div></div> : index === "links" ? <div className="hover-items" key={random.int(0, 100)}> {_.map(keys,(indx)=><List.Item className="hover-links" key={random.int(0, 100)}>{indx}</List.Item>)}</div>:""
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