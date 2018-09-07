import React, { Component } from "react";
import PropTypes from "prop-types";
import SimilarBeersList from "./SimilarBeersList";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export class Details extends Component {
  render() {
    return (
      <Dialog
        fullScreen={this.props.fullScreen}
        open={this.props.open}
        aria-labelledby="responsive-dialog-title"
        key={this.props.id}
      >
        <DialogContent>
          <Card className="orange-shadow">
            <CardMedia
              className="card-photo"
              image={this.props.beer.image_url}
              title={this.props.beer.name}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.beer.name}
              </Typography>
              <Typography variant="title">{this.props.beer.tagline}</Typography>
              <Typography variant="subheading">
                {this.props.beer.brewers_tips}
              </Typography>
              <Typography>IBU: {this.props.beer.ibu}</Typography>
              <Typography>ABV: {this.props.beer.abv}</Typography>
            </CardContent>
          </Card>
          <SimilarBeersList
            similarBeers={this.props.similarBeers}
            similarBeerClick={this.props.similarBeerClick}
            abv={this.props.beer.abv}
          />
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button onClick={this.handleClose}>Close</Button>
          </Link>
        </DialogActions>
      </Dialog>
    );
  }
}

Details.propTypes = {
  image_url: PropTypes.string,
  name: PropTypes.string,
  brewers_tips: PropTypes.string,
  tagline: PropTypes.string,
  abv: PropTypes.number,
  ibu: PropTypes.number,
  id: PropTypes.number
};
