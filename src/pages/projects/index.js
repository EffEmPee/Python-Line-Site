import React, { Component } from "react";
import api from '../../services/api';

import './style.css';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      githubPackages: [],
    };
  }

  componentDidMount(){
    api.get('orgs/python-line-team/repos')
    .then((res) => {
      this.setState({githubPackages: res.data});
    })
  }
  render() {
    const { githubPackages } = this.state;

    if(githubPackages.length < 1)
      return (
        <main>
          <h1>Os projetos serão listados aqui</h1>
        </main>
      )

    return (
      <main>
        <div className="container">
         {githubPackages.map(packages => (
            <a className="packages" key={ packages.id } href={ packages.html_url } target="_blank" rel="noopener noreferrer">
              <strong className="title">{ packages.name }</strong>
              <p className="description">{ packages.description }</p>
              <div className="counters">
                <div className="stars">
                  <i className="far fa-star"></i>
                  <p>{ packages.stargazers_count }</p>
                </div>
                <div className="watchers">
                  <i className="far fa-eye"></i>
                  <p>{ packages.watchers }</p>
                </div>              
              </div>
            </a>
        ))}</div>
      </main>
    )
  }
};