import { Navigate, Route, Routes } from 'react-router-dom';

import GenericNotFound from 'common/components/GenericNotFound/GenericNotFound';
import Header from 'common/components/Header/Header';
import { coreConfig } from 'common/core/config';
import CharactersDashboard from 'modules/dashboard/components/CharactersDashboard';
import CharacterDetails from 'modules/details/components/CharacterDetails';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <div className={styles.content}>
      <Routes>
        <Route path={coreConfig.routes.character.characterId} element={<CharacterDetails />} />
        <Route path={coreConfig.routes.characters.url} element={<CharactersDashboard />} />
        <Route
          path={coreConfig.routes.root}
          element={<Navigate to={coreConfig.routes.characters.url} replace />}
        />
        <Route
          path="*"
          element={
            <GenericNotFound
              title="No character Found"
              message="The character for this url does not exist, please check the url"
            />
          }
        />
      </Routes>
    </div>
  </div>
);

export default App;
