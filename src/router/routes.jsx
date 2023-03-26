import { Route } from 'react-router-dom';

import StatPage from '../pages/StatPage';
import Layout  from '../components/Layout';
import LoginPage  from '../pages/LoginPage';
import MapPage from '../pages/MapPage';



const createRoutes = () => (
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<StatPage />} />
      <Route path="map" element={<MapPage />} />
    </Route>
    <Route path="/authorization" element={<LoginPage/>} />
  </>  
);
export default createRoutes;

