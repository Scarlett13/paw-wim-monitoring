module.exports = {
	apps: [
		{
			name: "frontend",
			script: "yarn preview",
			instances: 2,
			autorestart: true,
			watch: false,
			time: true,
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
