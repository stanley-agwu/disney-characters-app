import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Home from './Pages/Home/Home';
import Toast from './components/Toast/Toast';
import Character from './Pages/Character/Character';

const App = () => (
  <>
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="character/:id" element={<Character />} />
          </Routes>
        </div>
      </div>
    </Router>
    <Toast />
  </>
);

export default App;
