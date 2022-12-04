// import logo from './logo.svg';
import React, { useState } from 'react';
import {ReactComponent as Chat} from './icons/chat_icon.svg'
import {ReactComponent as Home} from './icons/home_icon.svg'
import {ReactComponent as Rocket} from './icons/rocket_icon.svg'
import {ReactComponent as LinkedIn} from './icons/linkedin_icon.svg'
import {ReactComponent as Twitter} from './icons/twitter_icon.svg'
import {ReactComponent as SpaceX} from './icons/spacex_icon.svg'
import {ReactComponent as NASA} from './icons/nasa_icon.svg'

import './App.css';

function App() {
  const social_medias = [{
    "leftIcon": <LinkedIn />,
    "name": "LinkedIn"
  },
  {
    "leftIcon": <Twitter />,
    "name": "Twitter"
  },
]
const employers = [{
  "leftIcon": <SpaceX />,
  "name": "SpaceX"
},
{
  "leftIcon": <NASA />,
  "name": "NASA"
},
]
  return (
      <Navbar>
        <NavItem icon={<Home/>}/>
        <NavItem icon={<Rocket/>}>
          <DropdownMenu dropdowns={employers}/>
        </NavItem>
        <NavItem icon={<Chat/>}>
          <DropdownMenu dropdowns={social_medias}/>
        </NavItem>
      </Navbar>
  );
}
function Navbar(props){
  return(
    <nav className="navbar">
      <ul className='navbar-nav'> {props.children} </ul>
    </nav>
  );
}

function NavItem(props){

  const [open, setOpen] = useState(false);
  return(
    <li className='nav-item'>
    <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
      {props.icon}
    </a>
    { open && props.children }
    </li>
  );
}

function DropdownMenu(props){
  function DropdownItem(props){
    return(
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }

  // Add all of the dropdown fields to an array here
  let dropdowns = [];
  props.dropdowns.forEach(function(dropdown) {dropdowns.push(<DropdownItem leftIcon={dropdown.leftIcon}>{dropdown.name}</DropdownItem>)});

  return(
    <div className='dropdown'>
      {dropdowns}
    </div>
  );
}

export default App;
