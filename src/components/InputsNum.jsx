import React from 'react';
import PropTypes from 'prop-types';

class InputsNum extends React.Component {
  render() {
    const { name, value, onInputChange, nameLabel } = this.props;

    return (
      <label htmlFor={ name }>
        { nameLabel }
        <input
          type="number"
          name={ name }
          onChange={ onInputChange }
          value={ value }
          data-testid={ `${name}-input` }
          min="0"
          max="90"
        />
      </label>
    );
  }
}

InputsNum.propTypes = {
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.number,
  nameLabel: PropTypes.string,
}.isRequired;

export default InputsNum;
