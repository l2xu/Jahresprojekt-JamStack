module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 8000),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
