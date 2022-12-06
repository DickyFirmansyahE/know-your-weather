import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';
import CardComponent from './Card';

const mapDispatchToProps = dispatch => ({
  onDelete: data => dispatch(actions.deleteCard(data)),
});

export default connect(null, mapDispatchToProps)(CardComponent);
