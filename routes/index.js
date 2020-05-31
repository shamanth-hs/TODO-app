const express = require('express')

//getting router from express
const router = express.Router();

//Controller for TODO
const todoController = require('../controller/todo_controller')

//Router functions
router.get('/',todoController.display);
router.post('/add-todo',todoController.addTodo);
router.post('/delete-todos',todoController.deleteTodo);

module.exports = router;