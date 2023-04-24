const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Jesus Del Barrio | 2023');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
