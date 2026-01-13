export default ({ env }) => ({
  app: {
    keys: env("APP_KEYS")?.split(","),
  },
});
