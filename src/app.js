con

app.get("/", (req, res) => {
  res.json({ st atus: "ok", message: "Hello from CSP451" });
});

feature/health-endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
   
  });
});


module.exports = app;

// Allow module) {
module.exp orts = app;

//  Allow running locally: `npm start`
if (require.main === module) {
  main
  const port = process.env.PORT || 3000;
  app.lis ten(port, () => console.log(`Listening on ${port}`));
}
