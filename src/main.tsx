import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Testimonial from './components/testimonial.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Testimonial />
  </StrictMode>
);
