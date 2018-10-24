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

    //variable to get filtered match
    const matchTransformer = this.state.transformers.filter(match => match.id === id);

    const matched = matchTransformer[0];

    //=========================================



    //if they haven't been selected before...

    if(matched.timesClicked === 0) {

      this.setState({ score: this.state.score + 1});

      matched.timesClicked = 1;

    } 

    //if they have been already selected before
    
    else if(matched.timesClicked === 1) {

      console.log("You've already clicked this one!! :( ");

      this.setState({ score: 0 });

      matched.timesClicked = 0;

    }

    // this.state.transformers.forEach(TransformersCard => {

    //   if(TransformersCard.id === id) {

    //     console.log(`matched the transformer! ${TransformersCard.name}`);

    //   }
    // });

    //========================================================================


    // high score check function

    // if(this.state.score > this.state.highscore) {

    //   this.setState({ highscore: this.state.score });

    //   console.log("you've beaten the high score!!!");
    // }

    //increase count functionality

    // this.setState({ score: this.state.score + 1});

    //===================================================

    //randomize card functionality

    // this.state.transformers.sort(() => Math.random() - 0.5);

    // return true; 

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
