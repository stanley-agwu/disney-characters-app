import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Home from './Pages/Home/Home';
import Toast from './components/Toast/Toast';

const App = () => (
  <>
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
    <Toast />
  </>
);

export default App;
