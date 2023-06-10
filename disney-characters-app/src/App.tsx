import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import styles from './App.module.scss';

const App = () => (
  <>
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.content}>
          <div>Hello, world!</div>
        </div>
      </div>
    </Router>
  </>
);

export default App;
