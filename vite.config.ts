import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { UserConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
const config: UserConfig = {
	plugins: [
		VitePWA({
			registerType: "autoUpdate",
			devOptions: {
				enabled: true,
			},
			injectRegister: "auto",
			includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
			manifest: {
				name: "WIM Monitoring",
				short_name: "WIM Monitoring",
				description: "Weigh In Motion Monitoring Dashboard",
				theme_color: "#ffffff",
				icons: [
					{
						src: "android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),
		react(),
		TanStackRouterVite(),
	],
	server: {
		proxy: {
			"/api": {
				target: "http://127.0.0.1:3010",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
			"/v2": {
				target: "http://localhost:3010/v2",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/v2/, ""),
			},
		},
	},
	// test: {
	// 	environment: "jsdom",
	// 	setupFiles: ["./vitest.setup.ts"],
	// 	css: true,
	// },
};

export default config;
