module.exports = {
	apps: [
		{
			name: "frontend",
			script: "yarn",
			args: "preview",
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "2G",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
