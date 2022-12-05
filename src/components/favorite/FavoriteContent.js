import React, { Component } from 'react';
// Utilities
import { v4 as uuidv4 } from 'uuid';
// Components
import Card from '../favorite/favoriteCard/CardContainer';
import {
  Container,
  Grid,
} from "@mui/material";
import AddFavorite from './favoriteSearch/addFavorite';

class HomePage extends Component {
  componentDidMount() {
    const { addCities } = this.props;
    const previousCities = JSON.parse(localStorage.getItem('cities'));

    if (!previousCities) return;

    addCities(previousCities);
  }

  componentDidUpdate(prevProps) {
    const { cities, query, onLoad } = this.props;

    localStorage.setItem('cities', JSON.stringify(cities));

    if (prevProps.query === query) return;

    onLoad(query);
  }

  render() {
    const { cities, onSubmit } = this.props;
    return (
      <div className="fav-content">
        <AddFavorite onSubmit={onSubmit} />
        <Container sx={{ marginBottom: "20px" }}>
            <Container>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {!!cities && cities.map(city => <Card key={uuidv4()} city={city} />)}
          </Grid>
          </Container>
        </Container>
      </div>
    );
  }
}

export default HomePage;
