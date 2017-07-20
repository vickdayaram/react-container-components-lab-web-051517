// Code MovieReviews Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

// class MovieReviews extends React.Component {
//
//   render(){
//       return(
//       <div className="review-list">
//         {this.props.reviews.map((r) => <div className="review"> {r.display_title}</div>)}
//       </div>
//     )
//   }
// }
//
// MovieReviews.defaultProps = {
//   reviews: []
// }


const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((r) => <div className="review"> {r.display_title}</div>)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews
