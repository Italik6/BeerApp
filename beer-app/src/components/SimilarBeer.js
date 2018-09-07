import React, { Component } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

export class SimilarBeer extends Component {
  render() {
    const Description = () => {
      return (
        <div className="m-1">
          <Typography gutterBottom variant="caption">
            {this.props.brewers_tips}
          </Typography>
        </div>
      );
    };

    return (
      <Card onClick={this.props.onClick} className="link">
        <CardMedia
          className="similar-beer"
          image={this.props.image_url}
          title={this.props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="subheading" component="h2">
            {this.props.name}
          </Typography>
          <Typography>ABV: {this.props.abv}</Typography>
        </CardContent>
        {this.props.showDescription ? <Description /> : null}
      </Card>
    );
  }
}

SimilarBeer.propTypes = {
  image_url: PropTypes.string,
  name: PropTypes.string,
  brewers_tips: PropTypes.string,
  abv: PropTypes.number,
  showDescription: PropTypes.bool
};
