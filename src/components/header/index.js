import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../img/logo.png';
import about from '../../img/about.png';
import group from '../../img/team.png';
import projects from '../../img/box.png';
import help from '../../img/help.png';
import contact from '../../img/contact.png';

export default class Header extends Component {
  
  render() {

    return (
      <nav className="sideBar">
        <ul className="sideBar-nav">      
          <li className="logo">
            <Link to="/" className="logo-link">
              <img alt="logo" src={ logo } />
              <span className="link-text logo-text">Python line</span>

            </Link>
            {/* <i className="fas fa-angle-double-right"></i> */}
          </li>
          <li className="button">
            <Link to="/quem-somos" className="button-link">
              <img alt="Aboutus" src={ about } />  
              <span className="link-text">Quem somos</span>
            </Link>
          </li>
          <li className="button">
            <Link to="/participantes" className="button-link">
              <img alt="group" src={ group } />  
              <span className="link-text" >Participantes</span>
            </Link>
          </li>
          <li className="button">
            <Link to="/projetos" className="button-link">
              <img alt="projects" src={ projects } />  
              <span className="link-text">Projetos</span>
            </Link> 
          </li>
          <li className="button">
            <Link to="/como-ajudar" className="button-link">
              <img alt="help" src={ help } />  
              <span className="link-text">Como Ajudar</span>
            </Link>
          </li>
          <li className="button">
            <Link to="/contato" className="button-link">
              <img alt="contact" src={ contact } />  
              <span className="link-text">Contato</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
};
