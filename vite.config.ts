import {resolve} from 'path';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({rollupTypes: true, exclude: ['**/*.stories.(ts|tsx)']})],
    resolve: {
        alias: {
          '@': "/src",
        },
    },
    build: {
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'score-board',
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDom',
                },
            },
        },
    },
    test: {
        include: ['src/*.{test,spec}.?(c|m)[jt]s?(x)'],
        setupFiles: ["./setup-tests.ts"],
        globals: true,
        environment: "happy-dom",
    },
});
