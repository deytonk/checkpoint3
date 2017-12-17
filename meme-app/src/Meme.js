import React, { Component } from 'react';
import './App.css';


class Meme extends Component {
  state = {
    meme: null
  }

  componentDidMount(){
    fetch('http://version1.api.memegenerator.net/javascript.js')
    .then((response)=>response.json())
    .then((data)=>{
      this.setState({meme: data.results})
    })
  }

  renderMeme(){
    const {meme} = this.state;
    if(meme && meme.length > 0){
      return meme.map((obj, key)=>{
        return (
          <img src= {obj.picture.medium} className='photo' alt=" "/>
        );
      })
    }
  }

 render() {
    return (
      <div>
        <h2>Choose a caption!</h2>
        <div>
        {this.renderMeme()}
        </div>
      </div>
    );
  }
}

export default Meme;
