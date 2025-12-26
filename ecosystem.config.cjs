module.exports = {
  apps: [
    {
      name: "plug13",
      port: "3000",
      script: "./.output/server/index.mjs",
      cwd: "./",
      env_file: "./.env",
      instances: 1,
      exec_mode: "fork",
    },
  ],
};
