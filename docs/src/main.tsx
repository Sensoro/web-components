import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import '@sensoro-design/web-components/es/themes/default.css';
import '@shoelace-style/shoelace/dist/themes/light.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
)
