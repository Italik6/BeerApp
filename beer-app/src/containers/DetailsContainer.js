import React, { Component } from "react";
import { Loader } from "../components/Loader";
import { Details } from "../components/Details";

export class DetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: null,
      open: true || props.location.state.open,
      similarBeers: []
    };

    this.handleClose = this.handleClose.bind(this);
  }
  // close modal
  handleClose = () => {
    this.setState({ open: false });
  };

  similarBeerClick = id => {
    // find clicked beer
    let beer = this.state.similarBeers.find(x => x.id === id);
    // find index of selected beer
    let indexOfBeer = this.state.similarBeers.findIndex(x => x.id === id);

    beer.showDescription === true
      ? (beer.showDescription = false)
      : (beer.showDescription = true);

    this.props.beerStore.similarBeers[indexOfBeer] = beer;

    this.setState({
      similarBeers: this.props.beerStore.similarBeers
    });
  };

  componentDidMount = async () => {
    let { beerStore } = this.props;
    let id = this.props.match.params.postId;

    try {
      await this.props.beerStore.getDetails(id);
      await this.props.beerStore.getSimilarBeers();
    } catch (err) {
      alert("try again later");
      console.log(err);
    }

    this.setState({
      beer: beerStore.selectedBeer,
      similarBeers: beerStore.similarBeers
    });
  };

  render() {
    // check if we already have a beer
    if (this.state.beer === null) {
      return <Loader />;
    }
    return (
      <Details
        beer={this.state.beer}
        open={this.state.open}
        similarBeers={this.state.similarBeers}
        similarBeerClick={this.similarBeerClick}
        description={this.state.description}
      />
    );
  }
}
