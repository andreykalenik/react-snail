import {Route} from 'react-router-dom';
import LastActivity   from '../pages/LastActivity'
import WeekActivites  from '../pages/WeekActivites'
import MonthActivites  from '../pages/MonthActivites'
import Layout  from '../components/Layout';
import LoginPage  from '../pages/LoginPage';


let oauthCode = localStorage.getItem('oauth_code')

const createRoutes = () => (
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<LastActivity />} />
      <Route path="week" element={<WeekActivites />} />
      <Route path="month" element={<MonthActivites />} />
      <Route path="range" element={<LastActivity />} />
    </Route>
    <Route path="/authorization" element={<LoginPage/>} />
  </>  
);
export default createRoutes;

