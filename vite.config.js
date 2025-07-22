import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/news-app/", // 👈 very important
	plugins: [react()],
});
