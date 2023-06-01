const mongoose = require("mongoose");
const url = process.env.DB_URI || "mongodb://localhost:27017/ecommerce";
const connectDatabase = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
