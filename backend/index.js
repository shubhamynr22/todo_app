const express = require('express');
const cors = require('cors');
const todoRouter = require('./routes/todo.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', todoRouter);

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
