import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/shared/Header.jsx'
import Routes from './routes';
import { getMagazine } from './services/ApiMethods.js'
import NewArticle from './components/NewArticle.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      magazine: {}
    }
  }

  componentDidMount = () => {
    this.getInfo();
  }

  getInfo = async () => {
    const magInfo = await getMagazine();
    console.log(magInfo);
    this.setState({
        magazine: magInfo 
    })
  }

  render () {
    return (
      <div className="App">
        <Header magazine={this.state.magazine} />
        <Routes magazine={this.state.magazine} />
      </div>
    );
  }
}

export default App;
