
import './App.css'
import React, { Component } from 'react'

export default class App extends Component {
  state={
    Fullname:'David Beckham',
    bio:'Ancien joueur footbool,jouai a equipe PSG,AC Milan et Real Madrid',
    image:'https://assets-fr.imgfoot.com/media/cache/1200x1200/david-beckham-2122-62600b8f74455.jpg',
    profission:'Joueur FootBall',
    show:true,
    count:0
  };
  // fonction pour compteur
  handlePlus=()=>this.setState({count:this.state.count+1})
  // fonction pour bouton
 handleShow=()=>this.setState({show: !this.state.show})
 componentDidMount() {
  console.log("componentDidMount")
  setInterval(this.handlePlus,500);
}


  render() {
    return (
      <div>
        <button onClick={this.handleShow} className='btn'>Show</button>
        {this.state.show &&(
          <>
          {/* appelle les elements de state */}
        <h3 className='titre'>{this.state.Fullname}</h3>
        <h3 className='titre'>{this.state.bio}</h3>
        <img className='img' src={this.state.image} alt="" />
        <h3 className='titre'>{this.state.profission}</h3>
        <h3 className='titre'>Compteur:  {this.state.count}</h3>

        </>
        )}


      </div>
    )
  }
}
