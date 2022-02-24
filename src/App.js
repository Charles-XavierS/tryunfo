import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(
      (preventState) => ({
        ...preventState,
        [name]: value,
      }),
      () => this.isSaveButtonDisabled(),
    );
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

  render() {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      isSaveButtonDisabled } = this.state;

    return (
      <main>

        <section>
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
          />
        </section>

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

      </main>
    );
  }
}

export default App;
