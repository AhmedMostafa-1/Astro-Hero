import {defineConfig} from "astro/config";

export default defineConfig({
    site: "http://localhost:4321",
    integrations: [
        // Add your integrations here
    ],
    buildOptions: {
        site: "http://localhost:4321",
    },
    vite: {
        // Ensure Vite is serving static files
    },
    publicDir: "public",
});
