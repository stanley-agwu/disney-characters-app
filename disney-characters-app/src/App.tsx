import { Navigate, Route, Routes } from 'react-router-dom';

import Header from 'common/components/Header/Header';
import CharactersDashboard from 'modules/dashboard/components/CharactersDashboard';
import CharacterDetails from 'modules/details/components/CharacterDetails';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<Navigate to="/character" replace />} />
        <Route path="character/:id" element={<CharacterDetails />} />
        <Route path="character" element={<CharactersDashboard />} />
      </Routes>
    </div>
  </div>
);

export default App;
