import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <main>

        <section>
          <Form />
        </section>

        <Card />

      </main>
    );
  }
}

export default App;
