import React, { Component } from "react";
import TransformersCard from "./components/transformer_card";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import transformers from "./transformers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    transformers,
    score: 0,
    highscore: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  clickCount = id => {

    //increase count functionality

    this.setState({ score: this.state.score + 1});

    //===================================================

    //randomize card functionality

    this.state.transformers.sort(() => Math.random() - 0.5);

    return true; 

    //=====================================================


  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Battle For Cybertron</Title>
        {this.state.transformers.map(transformers => (
          <TransformersCard
            // removeFriend={this.removeFriend}
            clickCount={this.clickCount}
            //===============================
            
            id={transformers.id}
            key={transformers.id}
            name={transformers.name}
            image={transformers.image}
            role={transformers.role}
            altmode={transformers.altmode}
            affiliation={transformers.affiliation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
