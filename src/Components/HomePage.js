import React, { useState, useEffect } from "react";

const HomePage = () => { 

  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch('/dominoScore').then(
      res => res.json()
    ).then(
      data => {
        setScore(4) //subject to change
        console.log('set score state; ',data)
      })
  },[]);

    return (
        <div>
            <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <img class="masthead-avatar mb-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png" alt="dominos_logo" />
                
                <div>
                    <h1 class="masthead-heading text-uppercase mb-0">{score === 0 ? (<i class="fas fa-sync fa-spin"></i>) : score}/5</h1>
                </div>
                
                <h3>Sentiment Score</h3>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-icon">
                     {score === 1 ? (<i class="fas fa-star"></i>) : null}
                     {score === 2 ? (<div> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>) : null}
                     {score === 3 ? (<div> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>) : null}
                     {score === 4 ? (<div> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>) : null}
                     {score === 5 ? (<div> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>) : null}
                    </div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0"> Based on tweets that contains @dominos for the past month, generating in real-time</p>
            </div>
        </header>
        </div>
    );
  }

export default HomePage;