module.exports = {
	apps: [
		{
			name: `wim-app-monitoring`,
			script: "serve",
			exec_mode: "cluster",
			instances: "max",
			env: {
				PM2_SERVE_PATH: "./dist",
				PM2_SERVE_PORT: 5173,
				PM2_SERVE_SPA: "true",
				NODE_ENV: "production",
			},
		},
	],
};
