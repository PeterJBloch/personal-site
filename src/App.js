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
  return (
    <div>
      <Navbar>
        <NavItem icon={<Home/>}/>
        <NavItem icon={<School/>} content_id="school"/>
        <NavItem icon={<Rocket/>}>
          <DropdownMenu dropdowns={employers}/>
        </NavItem>
        <NavItem icon={<Chat/>}>
          <DropdownMenu dropdowns={social_medias}/>
        </NavItem>
      </Navbar>
      <AllPageContent content={page_content} id="page-content"></AllPageContent>
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
    <a href={props.link} className='icon-button' onClick={ function() {
      setOpen(!open);
      console.log("Click!");
      }}>
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

function AllPageContent(props){
  // Load each page in
  var pages = [];
  props.content.forEach( function(single_page){
    console.log("Loading page id: " + single_page.id);
    pages.push(<SinglePage key={single_page.id} content={single_page}></SinglePage>)
  })
  return(pages);
}

function SinglePage(props){
  var page = props.content
  var subsections = [];
  page.subsections.forEach(function(section) {
    console.log("Loading section id: "+ section.id+" for page id: "+ page.id);
    subsections.push(<PageSection key={section.id} section={section}>{section.section_name}</PageSection>);
  });
  return(
    <div className='PageContent'>
      <h2>{page.heading}</h2>
      <div className='MainContent'>
        <p>
          {page.body}
        </p>
      </div>
      <div className='subsections'>
        {subsections}
      </div>
    </div>
  );
}

function PageSection(props){
  return(
  <div className='section'>
    <h4>{props.section.heading}</h4>
    <p>{props.section.body}</p>
  </div>
  );
}

export default App;
