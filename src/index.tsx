import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { MainApp } from './apps/MainApp';
import { BrowserRouter } from 'react-router-dom';
import { contactStore } from './store/contactsStore';
export const StoreContext = createContext(contactStore);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={contactStore}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
      </StoreContext.Provider>
  </React.StrictMode>
);