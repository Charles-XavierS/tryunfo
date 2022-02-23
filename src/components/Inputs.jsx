import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { type, name, value, change, nameLabel } = this.props;

    return (
      <label htmlFor={ name }>
        { nameLabel }
        <input
          type={ type }
          name={ name }
          onChange={ change }
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
  change: PropTypes.func,
  value: PropTypes.number,
}.isRequired;

export default Inputs;
