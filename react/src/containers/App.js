import React , {useState, memo, useEffect} from 'react';
import { isEqual } from 'lodash';
import SidebarRight from '../components/SidebarRight/SidebarRight';
import '../styles/App.css';
import SidebarLeft from '../components/SidebarLeft/SidebarLeft';
import Main from "../components/Main/Main";
import NavBar from '../components/Navbar/Navbar';
import Context from './Context';
import {services} from "../services.json";
const App = memo((props)=>  {
 
  const { Provider } = Context;
  const [messages, setMessages] = useState([])
  const url = "https://my.api.mockaroo.com";
  console.log(url+services[2].url);

  useEffect(() => {fetch(url+services[2].url, 
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
      }
  })
  .then(resp=>resp.json())
  .then(data=>setMessages(data))
  },[]);

  const [notifications, setNotification] = useState([])
  

  useEffect(() => {fetch(url+services[3].url, 
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
      }
  })
  .then(resp=>resp.json())
  .then(data=>setNotification(data))
  },[])

  const [visible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [isHovering, setIsHovering] = useState({hover: false, target:""});
  const [navbarVisible, setNavbarVisible] = useState(false);


  const removeHover = () => { setIsHovering(Object.assign({}, isHovering, {hover:false}))};
  const setHover = (e) => {e.target.dataset.name && setIsHovering(Object.assign({}, isHovering, {hover:true, target:e.target.dataset.name }))};
  const handleToggle = () => {setNavbarVisible(!navbarVisible)};
  const handleItemClick = (e, { name }) =>{setActiveItem(name)};
  const showSidebar = () => {setVisible(true)};
  const hideSidebar = () => {setVisible(false)};
  const handleMouseHover = () => {setIsHovering(Object.assign({}, isHovering, {hover: !isHovering.hover}))};
  const handlePusher = () => {setNavbarVisible(!navbarVisible)};

  return (
    <Provider value={
      {visible,messages, notifications, activeItem,isHovering,navbarVisible,showSidebar,handleItemClick,hideSidebar, handlePusher,handleToggle,handleMouseHover,setHover, removeHover}
      }>
      <SidebarRight>
        <NavBar />
        <div className="app">
            <SidebarLeft/>
            <Main/>
        </div>
      </SidebarRight>
    </Provider>
    
   
  );
}, equalityCheck)

function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
  } 

export default App;
