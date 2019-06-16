import React,{useState} from "react";
import { Accordion, Icon } from 'semantic-ui-react';
import SidebarForm from "./SidebarForm";
import "../../styles/Bugs.css";


const Bugs = ()=>{
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (e, titleProps) => {
        console.log(titleProps);
      const { index } = titleProps
      const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }
    return(
        <div className="bugs">
        <SidebarForm/> 

        <Accordion>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick}>
            <Icon className="s7-angle-down" />
            Under Error 352
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            <p>
            Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.
            </p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={handleClick}>
            <Icon className="s7-angle-down" />
             Error 404
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
            <p>
            Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.
            </p>
            </Accordion.Content>
      </Accordion>
    </div>
    )
}

export default Bugs;