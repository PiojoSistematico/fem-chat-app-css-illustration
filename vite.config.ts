import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fem-chat-app-css-illustration/",
  plugins: [react()],
});
