import React from 'react';

const UserNLP = () => {
    return (
      <div>
        <header class="masthead bg-primary text-white text-center">
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Check Sentiment on Your Own Data</h2>
               
                <div class="divider-custom" >
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><h3>Step 1</h3></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="text-center mt-4">
                    <button type="button" class="btn btn-xl " href="#">
                        <i class="fas fa-download me-2"></i>
                        Upload Your Data!
                    </button>
                </div>

                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><h3>Step 2</h3></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="divider-custom" class="row justify-content-center">
                    <button type="button" class="btn btn-primary">Conduct Feature Extraction</button>
                </div>
                <div class="divider-custom">
                    <p>Number of Attributes :</p>
                </div>
                <div class="divider-custom">
                    <p>Number of Rows :</p>
                </div>
                <div class="divider-custom">
                    <p> File Size :</p>
                </div>
                

                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><h3>Step 3</h3></div>
                    <div class="divider-custom-line"></div>

                </div>
                <div class="divider-custom" class="row justify-content-center">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select ML Problem
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Sentiment Analysis</a>
                            <a class="dropdown-item" href="#">Data Visualization</a>
                            <a class="dropdown-item" href="#">Something Else</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </header>
      </div>
    )
  }
  
  export default UserNLP