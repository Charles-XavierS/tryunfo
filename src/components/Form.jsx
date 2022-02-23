import React from 'react';
import Inputs from './Inputs';
import Selector from './Selector';

class Form extends React.Component {
  render() {
    return (
      <form>

        <Inputs
          nameLabel="Nome"
          type="text"
          name="name"
          value=""
          onChange=""
        />

        <Inputs
          nameLabel="Descrição"
          type="textarea"
          name="description"
          value=""
          onChange=""
        />

        <Inputs
          nameLabel="Atributo 1"
          type="number"
          name="attr1"
          value=""
          onChange=""
        />

        <Inputs
          nameLabel="Atributo 2"
          type="number"
          name="attr2"
          value=""
          onChange=""
        />

        <Inputs
          nameLabel="Atributo 3"
          type="number"
          name="attr3"
          value=""
          onChange=""
        />

        <Inputs
          nameLabel="Imagem"
          type="text"
          name="image"
          value=""
          onChange=""
        />

        <Selector
          value=""
          onChange=""
        />

        <Inputs
          nameLabel="Super Trybe Trunfo"
          type="checkbox"
          name="trunfo"
          value=""
          onChange=""
        />

        <button type="submit" data-testid="save-button">
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
