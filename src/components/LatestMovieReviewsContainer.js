import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e7aa95b510f64027a63d09ab77d0ac36';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results
    }))
  }


  render(){
    return(
        <div className="latest-movie-reviews">
         < MovieReviews reviews={this.state.reviews}/>
        </div>
      )
  }

}

export default LatestMovieReviewsContainer
