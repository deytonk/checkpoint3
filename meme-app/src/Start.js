import React, { Component } from 'react';
import './App.css';

import TextField from 'material-ui/TextField';

class Start extends Component {
 render() {
    return (
      <div>
        <h2>Who is playing?</h2>
        <div className="players">
          <form>
            <TextField
              hintText="Player 1"
              floatingLabelText="Floating Label Text"
            />
            <TextField
              hintText="Player 2"
              floatingLabelText="Floating Label Text"
            />
            <TextField
              hintText="Judge"
              floatingLabelText="Floating Label Text"
            />
            <input type="submit" value="Submit">
          </form>
        </div>
      </div>
    );
  }
}

export default Start;
