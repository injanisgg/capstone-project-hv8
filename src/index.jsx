import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { FilterProvider } from './components/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FilterProvider>
        <RouterProvider router={router}></RouterProvider>
      </FilterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
