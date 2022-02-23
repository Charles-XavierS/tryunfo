import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { type, name, value, onInputChange, nameLabel } = this.props;

    return (
      <label htmlFor={ name }>
        { nameLabel }
        <input
          type={ type }
          name={ name }
          onChange={ onInputChange }
          value={ value }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.number,
  nameLabel: PropTypes.string,
}.isRequired;

export default Inputs;
