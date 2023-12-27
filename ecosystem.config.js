module.exports = {
	apps: [
		{
			name: "frontend",
			script: "yarn",
			args: "preview --host",
			instances: 2,
			autorestart: true,
			watch: false,
			time: true,
			exec_mode: "cluster",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
