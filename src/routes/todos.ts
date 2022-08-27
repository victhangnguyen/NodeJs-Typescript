// const express = require('express');
// const Router = express.Router;

import { Router } from 'express';
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from '../controllers/todo';

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:todoId', updateTodo); //! to update a Todo by Id

router.delete('/:todoId', deleteTodo); //! delete an Todo by Id

export default router;
