import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			message: ""
		};
	}

  componentDidMount() {
    // Enter the url of your heroku node app
		fetch(`<url-of-your-heroku-app>`)
		  .then(res => res.json())
      .then(json => this.setState({ message: json['msg'] }));
	}

  render() {    
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-welcome-message">
          {this.state.message}
        </p>
      </header>
    </div>
    );
  }
}

export default App;
