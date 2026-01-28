con

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from CSP451" });
});

app.get("/health", (req, res) => {
  res.status(200).json({
   
  });
});


module.exports = app;

// Allow module) {
  const port = process.env.PORT || 3000;
  app.lis ten(port, () => console.log(`Listening on ${port}`));
}
