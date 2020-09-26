import React, { Component} from 'react';
import api from '../../services/api';

import './style.css';

export default class Product extends Component {
  constructor(){
    super();
    this.state = {
      githubData: [],
    };
  }

  componentDidMount() {
    api.get(`organizations/67077136/public_members`)
    .then((res) => {
      this.setState({githubData: res.data});
    })
  }

  render() {
    const {githubData} = this.state;

    return(
      <main>
        <div className="container">
          {githubData.map(product => (
            <div className="member" key={product.id}>
              <a className="member-link" href={product.html_url} target="blank">
                <img src ={product.avatar_url} alt="imagem de perfil"/>
                <strong className="name">{product.login}</strong>
              </a>
            </div>
          ))}
        </div>
      </main>
    )
  }
};

