import { Navigate, Route, Routes } from 'react-router-dom';

import Header from 'components/Header/Header';

import Character from './pages/Character/Character';
import Home from './pages/Home/Home';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<Navigate to="/character" replace />} />
        <Route path="character/:id" element={<Character />} />
        <Route path="character" element={<DashBoard />} />
      </Routes>
    </div>
  </div>
);

export default App;
