const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
app.use(express.static("public"));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Body parser
app.use(express.urlencoded({ extended: false }));

// Routers
app.use("/", require("./routes/index"));
app.use("/send", require("./routes/send"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
