import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import Selector from './Selector';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>

        <Inputs
          nameLabel="Nome"
          type="text"
          name="name"
          value={ cardName }
          onInputChange={ onInputChange }
        />

        <Inputs
          nameLabel="Descrição"
          type="textarea"
          name="description"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />

        <Inputs
          nameLabel="Atributo 1"
          type="number"
          name="attr1"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />

        <Inputs
          nameLabel="Atributo 2"
          type="number"
          name="attr2"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />

        <Inputs
          nameLabel="Atributo 3"
          type="number"
          name="attr3"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />

        <Inputs
          nameLabel="Imagem"
          type="text"
          name="image"
          value={ cardImage }
          onInputChange={ onInputChange }
        />

        <Selector
          value={ cardRare }
          onInputChange={ onInputChange }
        />

        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
