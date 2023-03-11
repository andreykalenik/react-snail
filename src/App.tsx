import React from 'react';
import { Route, Routes, Link, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import  LastActivity   from './pages/LastActivity'
import  WeekActivites  from './pages/WeekActivites'
import  MonthActivites  from './pages/MonthActivites'


// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path ='/' element={<Layout/>}>
//     <Route index element={<WeekActivites />}/>
//     <Route  element={<LastActivity />}/>
//   </Route>
// ))

function App() {
  return (
    <>
      <header>
        <Link to="/"> Last Activity</Link>
        <Link to="/week"> Last Week </Link>
        <Link to="/month"> Last Month </Link>
        <Link to="/range"> Define Range </Link>
      </header>
      <Routes>
        <Route path="/" element={<LastActivity />} />
        <Route path="/week" element={<WeekActivites />} />
        <Route path="/month" element={<MonthActivites />} />
        <Route path="/range" element={<LastActivity />} />
      </Routes>
    </>

  );
}


export default App;
