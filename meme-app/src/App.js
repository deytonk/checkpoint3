import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Start from './Start';
import Meme from './Meme';
import Judge from './Judge';
import Winner from './Winner';

import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/"><RaisedButton onClick={this.handleTouchTap} label="Pick Meme!" fullWidth={true} primary={true} /></Link>
            <Menu>
              <MenuItem><Link to="/Start.js"><RaisedButton label="Who is playing?" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/Meme.js"><RaisedButton label="Choose a caption!" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/Judge.js"><RaisedButton label="Pick a winner!" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/Winner.js"><RaisedButton label="Winner!" fullWidth={true} primary={true} /></Link></MenuItem>
            </Menu>

            <hr/>
            <Route exact path="/" component={App}/>
            <Route exact path="/Start.js" component={Start}/>
            <Route path="/Meme.js" component={Meme}/>
            <Route path="/Judge.js" component={Judge}/>
            <Route path="/Winner.js" component={Winner}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
