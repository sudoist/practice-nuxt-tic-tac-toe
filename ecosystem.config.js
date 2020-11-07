module.exports = {
  apps: [
    {
      name: 'practice-nuxt-tic-tac-toe',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
