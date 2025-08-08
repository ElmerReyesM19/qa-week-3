import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,        // Permite usar describe/it sin importarlos cada vez
    environment: 'node',  // Entorno de pruebas Node.js
  },
});