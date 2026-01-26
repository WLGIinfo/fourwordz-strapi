module.exports = {
    apps: [
        {
            name: 'fourwordz-strapi',
            script: 'pnpm',
            args: 'start',
            cwd: './',
            instances: 1,
            exec_mode: 'fork',

            // Environment variables
            env: {
                NODE_ENV: 'production',
                HOST: process.env.HOST || '0.0.0.0',
                PORT: process.env.PORT || 1337,
                NODE_OPTIONS: '--max-old-space-size=2048'
            },

            // Production environment (use with --env production)
            env_production: {
                NODE_ENV: 'production',
                HOST: process.env.HOST || '0.0.0.0',
                PORT: process.env.PORT || 1337,
                NODE_OPTIONS: '--max-old-space-size=2048'
            },

            // Development environment (use with --env development)
            env_development: {
                NODE_ENV: 'development',
                HOST: process.env.HOST || '0.0.0.0',
                PORT: process.env.PORT || 1337,
                NODE_OPTIONS: '--max-old-space-size=1024'
            },

            // PM2 behavior
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',

            // Logging
            log_file: './logs/combined.log',
            out_file: './logs/out.log',
            error_file: './logs/error.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

            // Advanced options
            min_uptime: '10s',
            max_restarts: 10,

            // Kill timeout
            kill_timeout: 5000,

            // Source map support
            source_map_support: true,

            // Merge logs
            merge_logs: true,

            // Time to wait before restarting a crashed app
            restart_delay: 4000,
        }
    ]
};