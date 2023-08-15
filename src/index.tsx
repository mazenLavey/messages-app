import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MessagesProvider } from 'context/MessagesContext';
import { TagsArchiveProvider } from 'context/TagsArchiveContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MessagesProvider>
      <TagsArchiveProvider>
        <App />
      </TagsArchiveProvider>
    </MessagesProvider>
  </React.StrictMode>
);