import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

import './components/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.saveButton = this.saveButton.bind(this);
  }

  onInputChange({ target }) {
    const value = target.value === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, this.isSaveButtonDisabled);
  }

  removeSavedCard = (name) => {
    const { savedCards } = this.state;
    const remove = savedCards.find((cards) => cards.name === name);
    const isTrunfo = remove.trunfo;
    if (isTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ savedCards: savedCards.filter((cards) => cards.name !== name) });
  }

  isSaveButtonDisabled() {
    const { name, description, image, rare,
      attr1, attr2, attr3 } = this.state;

    this.setState({ isSaveButtonDisabled: true });

    const max = 90;
    const min = 0;
    const total = 210;
    const sumAttrs = Number(attr1) + Number(attr2) + Number(attr3);

    if (
      name && description && image && rare
      && sumAttrs <= total
      && min <= attr1 && attr1 <= max
      && min <= attr2 && attr2 <= max
      && min <= attr3 && attr3 <= max
    ) this.setState({ isSaveButtonDisabled: false });
  }

  saveButton(event) {
    event.preventDefault();
    const { name, description, attr1, atr2,
      attr3, image, rare, trunfo } = this.state;

    const savedCards = { name,
      description,
      attr1,
      atr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    if (trunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, savedCards],
    }), () => this.setState({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: 'false',
    }));
  }

  render() {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      savedCards } = this.state;

    return (
      <main>
        <section className="main-section">

          <div className="form">
            <Form
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.saveButton }
              hasTrunfo={ hasTrunfo }
            />

          </div>

          <div className="card">

            <Card
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
            />

          </div>

        </section>

        <section className="saved-cards">

          { savedCards.map((cards) => (
            <div key={ cards.name } className="card">
              <Card
                cardName={ cards.name }
                cardDescription={ cards.description }
                cardAttr1={ cards.attr1 }
                cardAttr2={ cards.attr2 }
                cardAttr3={ cards.attr3 }
                cardImage={ cards.image }
                cardRare={ cards.rare }
                cardTrunfo={ cards.trunfo }
              />
              <button
                type="button"
                className="removeBtn"
                data-testid="delete-button"
                onClick={ () => this.removeSavedCard(cards.name) }
              >
                Excluir
              </button>

            </div>))}

        </section>

      </main>
    );
  }
}

export default App;
