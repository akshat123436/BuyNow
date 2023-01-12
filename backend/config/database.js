const mongoose = require("mongoose");

async function connectDatabase() {
  const DBURL = process.env.DB_URI || "mongodb://localhost:27017/ecommerce";
  await mongoose.connect(DBURL);
}
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("connection open");
});

module.exports = connectDatabase;
