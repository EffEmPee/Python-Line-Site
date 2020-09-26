import { Component } from 'react';
import api from '../services/api';

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    // const { id } = ;
    const response = await api.get(`organizations/python-line-team/public_members`);
    console.log(response);
  }
  
  render() {
    return
  }
};