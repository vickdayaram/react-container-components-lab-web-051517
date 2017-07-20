// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e7aa95b510f64027a63d09ab77d0ac36';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=new&'
            + `api-key=${NYT_API_KEY}`;
//
class SearchableMovieReviewsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentWillMount(){
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results,
    })
   )
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
