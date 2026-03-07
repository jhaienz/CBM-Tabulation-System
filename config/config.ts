export default () => ({
  jwt: {
    secret: process.env.JWT_TOKEN,
    expriresIn: process.env.JWT_EXPIRES,
  },
  databaseUrl: process.env.MONGODB_URI,
  port: process.env.PORT,
});
