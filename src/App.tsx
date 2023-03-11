import {RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import createRoutes  from './router/routes'

const routes = createBrowserRouter(createRoutesFromElements(createRoutes()))


function App() {
  return (
      <>
        <RouterProvider router={routes} />
      </>

  );
}


export default App;
