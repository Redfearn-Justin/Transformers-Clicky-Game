import React, { Component } from "react";
import TransformersCard from "./components/transformer_card";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import transformers from "./transformers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    transformers
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Battle For Cybertron</Title>
        {this.state.transformers.map(transformers => (
          <TransformersCard
            removeFriend={this.removeFriend}
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
