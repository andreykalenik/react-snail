import { Route } from 'react-router-dom';
import StatPage from '../pages/StatPage';
import Layout  from '../pages/Layout';
import LoginPage  from '../pages/LoginPage';
import MapPage from '../pages/MapPage';
import NotFoundPage from '../pages/NotFoundPage'



const createRoutes = () => (

  <>
    <Route path="/" element={<Layout />} errorElement={<NotFoundPage/>}  >
      <Route index   element={<StatPage /> } />
      <Route path="map" element={<MapPage />} />
    </Route>
    <Route path="/authorization" element={<LoginPage/>} errorElement={<NotFoundPage/>} />
  </>  
);
export default createRoutes;

