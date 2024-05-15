import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';

import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

import './i18n';

import { App } from './app';
import theme from './theme';
import './main.css';
import './splash-screen.css';
import './animate-banner.css';

const rootElement = document.getElementById('k-solutions');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <HelmetProvider>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </HelmetProvider>
);
