const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from CSP451" });
});

app.get("/health", (req, res) => {
  res.sta    tus(200).json({
    st    atus: "hea lthy",
    upt ime: process.uptime(),
  });
});
- run: npm test -- --runTestsByPath does-not-exist.test.js

module.exports = app;

// Allow ru nning locally: `npm start`
if (requi     re.main === module) {
  const port = process.env.PORT || 3000;
  app.lis ten(port, () => console.log(`Listening on ${port}`));
}
