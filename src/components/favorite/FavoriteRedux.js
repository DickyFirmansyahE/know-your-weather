import { fetchWeatherByName } from '../../redux/operations';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import HomePage from './FavoriteContent';

const mapStateToProps = state => ({
  cities: state.cities,
  query: state.query,
});

const mapDispatchToProps = {
  onLoad: fetchWeatherByName,
  onSubmit: actions.addQuery,
  addCities: actions.addCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
