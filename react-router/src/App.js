import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom"; 

const router = createBrowserRouter([
  {
  path: '/',
  element: <div>Hello there!</div>
  },
  {
    path:'/home',
    element:<div>Home</div>
  },
  {
    path:'/todos',
    element:<div>Todos</div>
  },
  {
    path:'/contact',
    element:<div>Contact</div>
  },
]);
function App() {
  return (
 <RouterProvider router={router}/>
  );
}

export default App;
