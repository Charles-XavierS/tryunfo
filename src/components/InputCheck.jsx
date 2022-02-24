import React from 'react';
import PropTypes from 'prop-types';

class InputsCheck extends React.Component {
  render() {
    const { name, onInputChange, check, nameLabel } = this.props;

    return (
      <label htmlFor={ name }>
        { nameLabel }
        <input
          type="checkbox"
          name={ name }
          onChange={ onInputChange }
          checked={ check }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

InputsCheck.propTypes = {
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  check: PropTypes.bool,
  nameLabel: PropTypes.string,
}.isRequired;

export default InputsCheck;
