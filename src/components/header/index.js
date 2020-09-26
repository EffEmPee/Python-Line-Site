import React, { Component } from 'react';

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
            <a href="/" className="logo-link">
              <img alt="logo" src={ logo } />
              <span className="link-text logo-text">Python line</span>

            </a>
            {/* <i className="fas fa-angle-double-right"></i> */}
          </li>
          <li className="button">
            <a href="/quem-somos" className="button-link">
              <img alt="Aboutus" src={ about } />  
              <span className="link-text">Quem somos</span>
            </a>
          </li>
          <li className="button">
            <a href="/participantes" className="button-link">
              <img alt="group" src={ group } />  
              <span className="link-text" >Participantes</span>
            </a>
          </li>
          <li className="button">
            <a href="/projetos" className="button-link">
              <img alt="projects" src={ projects } />  
              <span className="link-text">Projetos</span>
            </a> 
          </li>
          <li className="button">
            <a href="/como-ajudar" className="button-link">
              <img alt="help" src={ help } />  
              <span className="link-text">Como Ajudar</span>
            </a>
          </li>
          <li className="button">
            <a href="/contato" className="button-link">
              <img alt="contact" src={ contact } />  
              <span className="link-text">Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
};
