import { api } from "../settings";
import axios from "axios";

export class BeerStore {
  constructor() {
    this.nextHref = null;
    this.hasMoreItems = true;
    this.theEnd = false;
    this.beers = [];
    this.selectedBeer = null;
    this.similarBeers = [];
  }

  checkDuplicates = beer => {
    for (let i = 0; i < this.beers.length; i++) {
      if (this.beers[i].name === beer.name) {
        return true;
      }
    }
  };

  loadBeers = async (pageIndex, pageSize) => {
    const response = await axios.get(
      api.getBeersUrl + `?page=${pageIndex}&per_page=${pageSize}`
    );

    this.beers = response.data;
  };

  // recursively add random beer
  addRandomBeer = async () => {
    if (this.beers.length < 25) {
      const response = await axios.get(api.getRandomBeerUrl);
      let beer = response.data[0];

      if (this.beers !== undefined && this.beers.length !== 0) {
        // if the rolled beer is already in the list roll again
        this.checkDuplicates(beer)
          ? this.addRandomBeer()
          : this.beers.push(response.data[0]);
      }
    } else {
      this.hasMoreItems = false;
      this.theEnd = true;
    }
  };

  getDetails = async id => {
    const response = await axios.get(api.getBeersUrl + `/${id}`);

    this.selectedBeer = response.data[0];
  };

  getSimilarBeers = async () => {
    let abv = Math.round(this.selectedBeer.abv);

    let response = null;

    if (abv <= 6) {
      response = await axios.get(api.getBeersUrl + `?abv_gt=${abv + 1}`);
    } else {
      response = await axios.get(api.getBeersUrl + `?abv_lt=${abv}`);
    }
    this.similarBeers = response.data.slice(1, 4);

    for (var i = 0; i < this.similarBeers.length; i++) {
      this.similarBeers[i]["showDescription"] = false;
    }
  };
}
