import React, { Component } from "react";
import { Loader } from "../components/Loader";
import { SimilarBeer } from "../components/SimilarBeer";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

export default class SimilarBeersList extends Component {
  render() {
    // check if we already have a similar beer
    if (this.props.similarBeers.length === 0) {
      return <Loader />;
    }
    return (
      <div>
        <Typography variant="subheading" className="p-t-4 p-b-1">
          Looking for something {this.props.abv > 6 ? "lighter" : "stronger"}?
        </Typography>
        <div className="similar-beers">
          {this.props.similarBeers.map(b => (
            <SimilarBeer
              key={b.id + b.name}
              {...b}
              onClick={() => this.props.similarBeerClick(b.id)}
              showDescription={b.showDescription}
            />
          ))}
        </div>
      </div>
    );
  }
}

SimilarBeersList.propTypes = {
  abv: PropTypes.number.isRequired
};
