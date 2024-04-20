const { Router } = require('express');
const { createTodo, updateTodo } = require('../types');
const { createTodoDB, updateTodoDB, getTodosDB, deleteTodoDB } = require('../mongodb');
const router = Router();

router.post('/todo', async (req, res) => {
  const parsedPayload = createTodo.safeParse(req.body);
  if (!parsedPayload.success) {
    return res.status(411).json({
      message: 'Invalid todo input'
    });
  }
  await createTodoDB(req.body.title, req.body.description);
  return res.status(200).json({
    message: 'Todo create successfully'
  });
});

router.get('/todos', async (req, res) => {
  const todos = await getTodosDB();
  res.status(200).json({
    todos: todos
  });
});

router.put('/completed', async (req, res) => {
  const parsedPayload = updateTodo.safeParse(req.body);
  if (!parsedPayload.success) {
    return res.status(411).json({
      message: 'Invalid todo input'
    });
  }
  await updateTodoDB(req.body.id);
  return res.status(200).json({
    message: 'Todo updated successfully'
  });
});

router.delete('/todo', async (req, res) => {
  const parsedPayload = updateTodo.safeParse(req.body);
  if (!parsedPayload.success) {
    return res.status(411).json({
      message: 'Invalid todo input'
    });
  }
  await deleteTodoDB(req.body.id);
  return res.status(200).json({
    message: 'Todo removed successfully'
  });
});
module.exports = router;
