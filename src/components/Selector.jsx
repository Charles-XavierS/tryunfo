import React from 'react';
import PropTypes from 'prop-types';

class Selector extends React.Component {
  render() {
    const { value, onInputChange } = this.props;

    return (
      <label htmlFor="rarity">
        Raridade
        <select
          name="rarity"
          value={ value }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

Selector.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Selector;
