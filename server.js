const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookies = require("cookie-parser");

dotenv.config();

const PORT = process.env.PORT;

// ✅ Connect DB before routes
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Now you can use bodyParser and other middleware
app.use(express.static("public"));

app.use(cookies());

// ✅ All other routes
app.use("/", require("./routes/mainRoute"));

// 404 Handler
app.use((req, res, next) => {
  res.status(404).render('404.ejs', { title: 'Page Not Found' });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
