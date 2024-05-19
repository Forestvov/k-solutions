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
            api: `${path.resolve(__dirname, './src/api/')}`,
            types: `${path.resolve(__dirname, './src/types/')}`,
            context: `${path.resolve(__dirname, './src/context/')}`,
            components: `${path.resolve(__dirname, './src/components/')}`,
            assets: `${path.resolve(__dirname, './src/assets/')}`,
            helpers: `${path.resolve(__dirname, './src/helpers/')}`,
            hooks: `${path.resolve(__dirname, './src/hooks/')}`,
            public: `${path.resolve(__dirname, './public/')}`,
            '@mui/material': '@mui/material/modern',
            '@mui/styled-engine': '@mui/styled-engine/modern',
            '@mui/system': '@mui/system/modern',
            '@mui/base': '@mui/base/modern',
            '@mui/utils': '@mui/utils/modern',
            '@mui/lab': '@mui/lab/modern',
        },
    },
});
