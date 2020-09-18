import React, { Component } from 'react';

import './styles.css';

import logo from '../../img/preta.png';
import about from '../../img/about.png';
import group from '../../img/team.png';
import projects from '../../img/box.png';
import help from '../../img/help.png';
import contact from '../../img/contact.png';

export default class Header extends Component {
  
  render() {

    return (
      <div className="sideBar">
        <div className="container">
          <img id="logo" alt="logo" src={ logo } />
          <h1 className="name">PYTHON LINE</h1>
        </div>
        <ul className="buttons">
          <li className="button" style={{"marginTop": "0"}}>
            <img href="" alt="Aboutus" src={ about } />  
              <div className="text"> <p>Quem somos</p></div>
          </li>
          <li className="button">
            <img href="" alt="group" src={ group } />  
            <p className="text" >Participantes</p>
          </li>
          <li className="button">
            <img href="" alt="projects" src={ projects } />  
            <p className="text">Projetos</p>
          </li>
          <li className="button">
            <img href="" alt="help" src={ help } />  
            <p className="text">Como Ajudar</p>
          </li>
          <li className="button">
            <img href="" alt="contact" src={ contact } />  
            <p className="text">Contato</p>
          </li>
        </ul>
      </div>
    )
  }
};
