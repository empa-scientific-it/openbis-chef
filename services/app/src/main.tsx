
import { createRoot } from 'react-dom/client';
// @ts-ignore
import App from '@src/App.tsx'

const root = createRoot(document.getElementById('app'));
root.render(<App />);