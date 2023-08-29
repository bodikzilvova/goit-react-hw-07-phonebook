import PropTypes from 'prop-types';
import { PhonebookContainer } from './Container.styled';

export const Container = props => {
  return <PhonebookContainer>{props.children}</PhonebookContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
