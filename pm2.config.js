module.exports = {
    apps: [{
        name: 'leanReact',
        script: './initializers/server/index.js',
        cwd: '/home/nazip/deploy/leanReact/current',
        instance: 2,
        exec_mode: 'cluster'
    }],
    deploy: {
        production: {
            user: 'nazip',
            host: ['localhost'],
            ref: 'origin/part9',
            repo: 'git@github.com:nazip/leanReact.git',
            'post-deploy': 'npm install && npm run prod:build && pm2 startOrRestart pm2.config.js --env production',
            path: '/home/nazip/deploy/leanReact',
            ssh_options: 'StrictHostKeyChecking=no'
        }      
    }   
};