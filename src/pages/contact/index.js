import React from "react";
import axios from "axios";

import "./style.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://enviador-python.herokuapp.com/send", //"https://enviar-emails-a.herokuapp.com/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="contact-link">
              <div className="container"> 
                <p id="social">nos encontre:</p>              
                <ul className="social">
                  <li className="social-link">
                    <a className="instagram" href="http://www.instagram.com/equipepythonline/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="social-link">
                    <a className="github"  href="http://github.com/Python-Line-team" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
            </div>
            </div>
          <div className="App">
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="user-info">
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="NOME"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                      required
                    /> 
                  </label>               
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="EMAIL"
                      aria-describedby="emailHelp"
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                    />
                  </label>
                </div>
              </div>  
              <div className="form-group message">
                <label htmlFor="message">
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                  placeholder="MENSAGEM"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
                </label>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }


  onNameChange(event) {
    this.setState({ name: event.target.value });  
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;