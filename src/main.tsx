import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createRoutesFromElements, 
  createBrowserRouter, 
  RouterProvider, 
  Route 
} from 'react-router-dom';
import Root from './routes/Root/root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // errorElement={<ErrorPage />}
    >
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
