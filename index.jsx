import ReactDOM from "react-dom/client"
import App from './App'
import Home from './components/Home';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
        
      },
      
    ]
  },
]);
root.render(<RouterProvider router={router} />)