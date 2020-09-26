import axios from 'axios';

const api = axios.create({ 
  baseURL: "https://api.github.com/", 
  clientID: "fa00ceb14993fa95f596", 
  clientSecret: "731425616889ee634ad655762688b236e0679004" 
}); 

export default api;