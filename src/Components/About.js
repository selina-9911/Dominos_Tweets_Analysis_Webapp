import React from 'react'

const About = () => {
  return (
    <div>
        <header class="masthead bg-primary text-white text-center">
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-white">About The Project</h2>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <div class="divider-custom">
                    <div class="col-lg-6 justify-content-center">
                        <p class="lead justify-content-center"> We are obtaining Domino’s Pizza streaming data from Twitter and based on those real-time tweets to perform sentiment analysis with a conclusion of rating system on if the market carries positive or negative attitude as a whole toward this type of pizza, then give feedback to the company. </p></div>
                </div>
            </div>
        </section>


        
        <section class="page-section" id="contact">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-white mb-0">Contact Us</h2>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="divider-custom"><p>Selina, Yingning, Wangying</p></div>
            </div>
        </section>
        </header>
    </div>
  )
}

export default About