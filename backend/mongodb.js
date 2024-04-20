const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Todo = mongoose.model('todos', TodoSchema);

const createTodoDB = async (title, description) => {
  await Todo.create({
    title: title,
    description: description,
    completed: false
  });
};

const updateTodoDB = async (id) => {
  await Todo.updateOne(
    {
      _id: id
    },
    {
      completed: true
    }
  );
};

const getTodosDB = async () => {
  const response = await Todo.find({});
  return response;
};

const deleteTodoDB = async (id) => {
  await Todo.deleteOne({
    _id: id
  });
};
module.exports = {
  createTodoDB,
  updateTodoDB,
  getTodosDB,
  deleteTodoDB
};
