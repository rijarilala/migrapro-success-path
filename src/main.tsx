
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set the initial language attribute on the HTML element
document.documentElement.lang = localStorage.getItem('i18nextLng') || 'fr';

createRoot(document.getElementById("root")!).render(<App />);
