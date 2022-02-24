import React from 'react';
import PropTypes from 'prop-types';

import Inputs from './Inputs';
import InputsNum from './InputsNum';
import InputsCheck from './InputCheck';
import Selector from './Selector';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    // const min = '0';
    // const max = '90';

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

        <InputsNum
          nameLabel="Atributo 1"
          name="attr1"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />

        <InputsNum
          nameLabel="Atributo 2"
          name="attr2"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />

        <InputsNum
          nameLabel="Atributo 3"
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

        <InputsCheck
          nameLabel="Super Trybe Trunfo"
          name="trunfo"
          check={ cardTrunfo }
          onInputChange={ onInputChange }
        />

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
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
