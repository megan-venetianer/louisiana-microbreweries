import React from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BreweryContainer = ({ breweries, favorites }) => {
  let breweryInfo = breweries.map(brewery => {
    return (
      <BreweryCard
        key={brewery.id}
        id={brewery.id}
        name={brewery.name}
        city={brewery.city}
      />)
  })

  return (
    <section className='brewery-container'>
      {breweryInfo}
    </section>
  )
}

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(BreweryContainer);
