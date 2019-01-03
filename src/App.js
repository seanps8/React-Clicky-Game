import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import TeamCard from "./components/TeamCard/TeamCard";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import teams from "./data.json";
import Title from "./components/Title";

function shuffleTeams(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [a[i], a[j]] = [a[j], a[i]];
  };
  return a;
};

class App extends Component {
  //Set this.state
  state = {
    teams,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id=> {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id), rightWrong: "Nice!" });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 16) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Let's go again!",
      clicked: []
    });
    alert("Oops! You picked that team already!");
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledTeams = shuffleTeams(teams);
    this.setState({ teams: shuffledTeams })
  };

  render () {
    return (
        <Wrapper>
          <Navbar 
            currentScore={this.state.currentScore}
            topScore={this.state.topScore}
            rightWrong={this.state.rightWrong}
          />
          <Title />
          <Container>
            <Row>
              {this.state.teams.map(team => (
                <Column size="md-3 sm-6">
                  <TeamCard
                    key={team.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    handleShuffle={this.handleShuffle}
                    id={team.id}
                    image={team.image}
                  />
                </Column>
              ))}
            </Row>
          </Container>
          <Footer />
        </Wrapper>    
    );
  }
}

export default App;
