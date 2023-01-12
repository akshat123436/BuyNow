const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
