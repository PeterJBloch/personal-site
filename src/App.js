import React, { useState } from 'react';
import {ReactComponent as Chat} from './icons/chat_icon.svg'
import {ReactComponent as Home} from './icons/home_icon.svg'
import {ReactComponent as School} from './icons/school_icon.svg'
import {ReactComponent as Rocket} from './icons/rocket_icon.svg'
import {ReactComponent as LinkedIn} from './icons/linkedin_icon.svg'
import {ReactComponent as Twitter} from './icons/twitter_icon.svg'
import {ReactComponent as SpaceX} from './icons/spacex_icon.svg'
import {ReactComponent as NASA} from './icons/nasa_icon.svg'
import './App.css';

const page_content = require("./page_content.json");

// Data for use on the page
const social_medias = [{
  "id":1,
  "leftIcon": <LinkedIn />,
  "name": "LinkedIn",
  "link": "https://linkedin.com/in/peterjbloch"
},
{
  "id":2,
  "leftIcon": <Twitter />,
  "name": "Twitter",
  "link": "https://twitter.com/thespacegorgon"
},
]
const employers = [{
"id":1,
"leftIcon": <SpaceX />,
"name": "SpaceX"
},
{
"id":2,
"leftIcon": <NASA />,
"name": "NASA"
},]

function App() {
  var shown_page = page_content[0];
  console.log(shown_page);
  return (
    <div>
      <Navbar>
        <NavItem icon={<Home/>}/>
        <NavItem icon={<School/>}/>
        <NavItem icon={<Rocket/>}>
          <DropdownMenu dropdowns={employers}/>
        </NavItem>
        <NavItem icon={<Chat/>}>
          <DropdownMenu dropdowns={social_medias}/>
        </NavItem>
      </Navbar>
      <PageContent content={shown_page}></PageContent>
    </div>
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
    <a href={props.link} className='icon-button' onClick={() => setOpen(!open)}>
      {props.icon}
    </a>
    { open && props.children }
    </li>
  );
}

function DropdownMenu(props){
  function DropdownItem(props){
    return(
      <a href={props.link} className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        {/* <span className='icon-right'>{props.rightIcon}</span> */}
      </a>
    );
  }

  // Add all of the dropdown fields to an array here
  let dropdowns = [];
  props.dropdowns.forEach(function(dropdown) {dropdowns.push(<DropdownItem key={dropdown.id} leftIcon={dropdown.leftIcon} link={dropdown.link}>{dropdown.name}</DropdownItem>)});

  return(
    <div className='dropdown'>
      {dropdowns}
    </div>
  );
}

function PageContent(props){
  var page = props.content
  console.log("loading " + page.page_name+ " page");
  var subsections = [];
  return(
    <div className='PageContent'>
      <h2>{page.heading}</h2>
      <div className='MainContent'>
        <p>
          {page.body}
        </p>
      </div>
      <div className='Subsections'>
        {subsections}
      </div>
    </div>
  );
}

export default App;
