import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            app: `${path.resolve(__dirname, './src/app/')}`,
            layouts: `${path.resolve(__dirname, './src/layouts/')}`,
            components: `${path.resolve(__dirname, './src/components/')}`,
            assets: `${path.resolve(__dirname, './src/assets/')}`,
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
