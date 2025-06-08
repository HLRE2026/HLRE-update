import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initToolbar } from '@stagewise/toolbar';

// Initialize Stagewise toolbar in development mode only
if (process.env.NODE_ENV === 'development') {
  const stagewiseConfig = {
    plugins: []
  };
  initToolbar(stagewiseConfig);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
