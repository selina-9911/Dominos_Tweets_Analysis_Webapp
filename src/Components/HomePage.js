import React, { Component } from "react";

export default class HomePage extends Component {
  state = {
    score: []
  }

  componentDidMount(){
    fetch('/dominoScore').then(
      res => res.json()
    ).then(
      data => {
        this.setState({
          score: [data['score']]
        });
        console.log('set score state; ',data)
      });
  }

  render() {
    const {score} = this.state
    const thescore = score.length ? (
      score.map(score => {
        return (score)
      })
      ) : (<h1 style={{color:"#FAEBD7"}}>Loading...</h1>
    );

    return (
        <div>
            <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <img class="masthead-avatar mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png" alt="dominos_logo" />
                
                <div>
                    <h1 class="masthead-heading text-uppercase mb-0">{thescore}/5</h1>
                </div>
                
                <h3>Sentiment Score</h3>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-icon">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                    </div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0"> Based on tweets that contains @dominos for the past month, generating in real-time</p>
            </div>
        </header>
        </div>
    );
  }
}
