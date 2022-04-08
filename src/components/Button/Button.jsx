import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

function Button({ onClickLoadMore }) {
  return <LoadMoreBtn onClick={onClickLoadMore}>Load more</LoadMoreBtn>;
}

Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};

export default Button;
