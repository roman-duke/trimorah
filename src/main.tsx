import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createRoutesFromElements, 
  createHashRouter, 
  RouterProvider, 
  Route 
} from 'react-router-dom';
import Root from './routes/Root/root';
import Home from './routes/Home/home';

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // errorElement={<ErrorPage />}
    >
      <Route
        path="/" 
        element={<Home />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
