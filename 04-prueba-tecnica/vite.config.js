import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// definimos las configuraciones basicas para que react funcione perfectamente 
export default defineConfig({
    plugins: [react()]
})