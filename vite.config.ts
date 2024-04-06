import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            app: `${path.resolve(__dirname, './src/app/')}`,
            public: `${path.resolve(__dirname, './public/')}`,
            '@mui/material': '@mui/material/legacy',
            '@mui/styled-engine': '@mui/styled-engine/legacy',
            '@mui/system': '@mui/system/legacy',
            '@mui/base': '@mui/base/legacy',
            '@mui/utils': '@mui/utils/legacy',
            '@mui/lab': '@mui/lab/legacy',
            // pages: path.resolve(__dirname, './src/pages'),
            // types: `${path.resolve(__dirname, './src/@types')}`,
        },
    },
});
