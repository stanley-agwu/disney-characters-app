import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Toast from './components/Toast/Toast';
import Character from './Pages/Character/Character';
import Home from './Pages/Home/Home';
import styles from './App.module.scss';

const App = () => (
  <>
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to="/character" replace />} />
            <Route path="character/:id" element={<Character />} />
            <Route path="character" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
    <Toast />
  </>
);

export default App;
