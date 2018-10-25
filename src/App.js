import React, { Component } from "react";
import TransformersCard from "./components/transformer_card";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import transformers from "./transformers.json";
import "./App.css";

class App extends Component {

  state = {
    transformers,
    score: 0,
    highscore: 0
  };

  highscoreCheck = () => {

    if(this.state.score >= this.state.highscore) {

      this.setState({ highscore: this.state.score + 1 });

    }
  }


  clickCount = id => {

    //variables

    const transformerArray = this.state.transformers;

    const matchedTransformer = this.state.transformers.find(match => match.id === id);

    //===========================


    //if they haven't been selected before...

    if(matchedTransformer.notClicked) {

      this.setState({ score: this.state.score + 1});

      matchedTransformer.notClicked = false;

      transformerArray.sort(() => Math.random() - 0.5);

      this.highscoreCheck();

      return true; 

    } 

    //if they have been already selected before
    
    else {

      alert("You've already clicked this one!! :( ... game is now resetting... ");

      this.setState({ score: 0, transformers });

      for (let i = 0; i < transformerArray.length; i++) {

        //setting every Transformer's "notClicked" setting back to true

        transformerArray[i].notClicked = true;

      }
    }
  };

  
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Battle For Cybertron</Title>
        {this.state.transformers.map(transformers => (
          <TransformersCard
            clickCount={this.clickCount}
            id={transformers.id}
            key={transformers.id}
            name={transformers.name}
            image={transformers.image}
            affiliation={transformers.affiliation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
