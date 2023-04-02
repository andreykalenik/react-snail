import {RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import createRoutes  from './router/routes'
import './assets/css/index.css';
import  store  from './store'
import { Provider } from 'react-redux'

const routes = createBrowserRouter(createRoutesFromElements(createRoutes()))


function App() {

  return (
    
      <>
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>  
      </>

  );
}


export default App;
