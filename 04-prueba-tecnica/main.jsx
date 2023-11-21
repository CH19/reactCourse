import {createRoot} from 'react-dom/client'
import App from './src/components/app';
// aqui renderizamos lo importante de nuestra aplicacion 
const app = document.getElementById('app');
const root = createRoot(app)
root.render(<App />)