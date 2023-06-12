import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
