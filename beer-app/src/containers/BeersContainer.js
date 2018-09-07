import React, { Component } from "react";
import { SingleBeer } from "../components/SingleBeer";
import { Loader } from "../components/Loader";
import InfiniteScroll from "react-infinite-scroller";
import PropTypes from "prop-types";

export class BeersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      theEnd: false,
      hasMoreItems: true,
      nextHref: null
    };

    this.beerStore = this.props.beerStore;
  }
  componentDidMount = async () => {
    let { beerStore } = this.props;

    try {
      await this.beerStore.loadBeers(1, 20);
    } catch (err) {
      alert("try again later");
    }

    this.setState({
      beers: beerStore.beers,
      theEnd: beerStore.theEnd,
      hasMoreItems: beerStore.hasMoreItems,
      nextHref: beerStore.nextHref
    });
  };

  addRandomBeer = async () => {
    let { beerStore } = this.props;

    try {
      await this.props.beerStore.addRandomBeer();
    } catch (err) {
      alert("try again later");
    }

    this.setState({
      beers: beerStore.beers,
      theEnd: beerStore.theEnd,
      hasMoreItems: beerStore.hasMoreItems,
      nextHref: beerStore.nextHref
    });
  };

  render() {
    const loader = <Loader key={0} />;
    const TheEnd = () => {
      return <p className="the-end">No more items...</p>;
    };

    return (
      <div>
        <h1>BeerApp</h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.addRandomBeer}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          <div className="beer-grid">
            {this.state.beers &&
              this.state.beers.map(b => (
                <SingleBeer key={b.id + b.name} {...b} />
              ))}
          </div>
        </InfiniteScroll>
        {this.state.theEnd ? <TheEnd /> : null}
      </div>
    );
  }
}

BeersContainer.propTypes = {
  beers: PropTypes.array,
  beerStore: PropTypes.any
};
