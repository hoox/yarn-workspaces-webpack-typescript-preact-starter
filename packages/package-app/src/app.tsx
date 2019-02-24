import { Component, h } from 'preact';
import { coreFunction1, coreFunction2, coreFunction3 } from 'package-core';

import styles from './app.css';

class App extends Component {
  private word: string;

  constructor() {
    super();
    this.word = `${coreFunction1()} ${coreFunction2()}`;
  }

  render() {
    return (
      <div class={styles.app}>
        <h1>{coreFunction3(this.word)}</h1>
      </div>
    );
  }
}

export default App;
