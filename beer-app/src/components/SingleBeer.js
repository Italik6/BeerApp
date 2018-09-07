import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

export class SingleBeer extends Component {
  render() {
    return (
      <div>
        {/* open modal while redirect with Link */}
        <Link
          to={{
            pathname: `/details/${this.props.id}`,
            state: { open: true }
          }}
          className="link"
        >
          <Card
            className="beer-card orange-shadow"
            onClick={this.handleClickOpen}
          >
            <CardMedia
              className="card-photo"
              image={this.props.image_url}
              title={this.props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.name}
              </Typography>
              <Typography variant="subheading">{this.props.tagline}</Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  }
}

SingleBeer.propTypes = {
  image_url: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,
  handleClickOpen: PropTypes.func
};
