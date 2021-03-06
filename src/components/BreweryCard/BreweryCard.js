import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreweryCard = ({ id, name, city }) => {
  return (
    <Link
    to={`/breweries/${id}`}
    >
    <div className='brewery-card' data-testid={`${id} container`}>
      <img src={`../../../logos/${id}.png`} alt={`Logo for ${name}`}/>
      <div className='brewery-city-container'>
        <h2>
        {name}
        </h2>
        <h1>
        {city}, LA
        </h1>
      </div>
      </div>
    </Link>
  )
}

const mapStateToProps = (state) => ({
  breweries: state.breweries
})

BreweryCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string
}

export default connect(mapStateToProps, null)(BreweryCard);
