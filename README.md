# Dominos Sentiment Analysis Using Twitter Data

  The motivation behind the project is that people’s purchasing decisions nowadays are easily influenced by social media testimonials about the specific products sold by the vendors. Companies would also like to build a strong brand image by providing timely customer service and tracking comments about their products through social media. Therefore, our group decided to set our focus on providing the general customer reviews on a well-known brand by tracking its Twitter data. In this case, we picked Domino’s Pizza because they are known for their utilization of social media accounts.
  
  We have developed a web application to satisfy two main goals of this project. First is to provide an overall assessment of the customer review on Domino’s Pizza by analyzing the real-time tweets generated from Domino’s Twitter account. We would like to provide a rating on a scale of 0 to 5 based on the sentiment from the streaming twitter data. Another goal is to allow users/business owners to upload their collected customer reviews and learn about the attitude of their customers towards their product.

# Architecture

  Anything that the users interact with will be on the frontend. The frontend of the web application is developed using HTML/CSS and JavaScript. The static frontend components are rendered using React and styled with Bootstrap. Any data requests would be sent to the backend and the server is developed with the Flask framework. Depending on the request, the server side will request data from the Twitter API/the database and the machine learning models will train and predict using the dataset obtained. After that, the output will be updated within the database and the model result will be sent back to the frontend and rendered on the web page. The machine learning models are developed using Apache Spark and Jupyter Notebook. The streaming data will be handled by Apache Kafka, which tracks the streaming data and provides the update to the firebase.

# Frontend
Home Page
	Users can see the overall sentiment of the tweets about Domino's Pizza over the past week. Below the rating, they can also see the most recent tweet about Dominos, the time the tweet was posted and the sentiment of the tweet.


User Conducted Machine Learning Page
	Users can use the navigation bar on the top to navigate to the page where they can upload their dataset for sentiment analysis. There are in total three steps. 
The first step is to upload a json file that contains one object with unique number keys that are matched to different string data. After uploading the data, the user can click on the button to see the metadata of the file that has been uploaded. The metadata includes number of attributes, number of rows, the file size and a preview of the data. To extract image metadata, users can enter the imageURL to see the image size. The final step is to start the machine learning process by clicking on the button. The result will appear after 10 seconds.


About Page
	If the user would like to learn more about the motivation behind this project, the project details and our contact information. They can jump to the about page through the navigation bar on the top.



# Database
Cloud database data
The Dominos data was extracted from Twitter using Python Tweepy package Cursor to get the fresh data within several days. Users can select how many tweets they want to evaluate. As they enter a number for tweets, the system will start to get twitter data, clean it using the NLTK package then send both raw and processed data to the cloud database which in this project, we use Firebase. 

Stream data
Moreover, we are using tweepy stream listener function to get streaming data with the help of Apache Kafka stream-processing software platform. Kafka handles data as a topic so we publish the streaming tweets to a topic by a producer. Kafka-python is utilized to initialize the Kafka producer which is the python client for Kafka. Then, the built-in Afinn package in Python is used to provide a general sentiment score of the given tweet. Next, we store the data and score back to Firebase so that users can get real-time comments using the app.

User Upload data (local data)
Users can also upload their collected customer reviews to the web and the system will use the LSTM model to train and provide an overall rating score so that users can learn about the attitude of their customers towards their product.

 # Machine Learning Algorithm
Sentiment Analysis:
Sentiment Analysis is a process of deciding whether a piece of writing is positive or negative. That is to say, it evaluates the attitude of the speaker. Basically our project has splitted to two ML techniques to conduct sentiment analysis: the LSTM model and the Spark Logistic Regression model. 

Long-Short Term Memory (LSTM):
Python sentiment analysis is a methodology for analyzing a piece of text to discover the sentiment hidden within it. It accomplishes this by combining machine learning and natural language processing (NLP). In our project, we use the LSTM layers to build a binary text classifier to classify the sentiment behind domino's pizza comments. LSTM is a variant of RNN which is used with sequential data such as text. We use over 1000 data samples classified into two types: positive and negative. The architecture in our model consists of an embedding layer, an LSTM layer, and a dense layer. We also introduce a Dropout mechanism between the LSTM layers. Below is our training result.


SparkML:
Apache Spark structured streaming is used to handle the streaming data in the form of data frames. Data gained from the Twitter streaming would be pre-processed and passed in to a machine learning pipeline. We are using the Stanford’s dataset (http://help.sentiment140.com/for-students), which contains 1.6 million tweets, to train the Spark Logistic Regression model trying to provide the sentiment score of a given tweet. Spark ML library is used to create a machine learning pipeline. Each tweet is tokenized and filtered of urls and punctuations as the cleaning step. Then stop words would be removed and the tweets would be vectorized and being calculated using CountVectorizer. The Inverse Document Frequency is also calculated as the next step. After being processed with above features, the tweets are able to be passed to the classifier, which is Logistic Regression in our project. The overall prediction accuracy of the model is over 83%. We would save the training model for future use in prediction of the streaming Twitter data.
