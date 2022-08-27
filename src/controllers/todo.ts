// import { Request, Response, NextFunction } from 'express';

// export const createTodo = (req: Request, res: Response, next: NextFunction) => {
//   context;
// };

//! So there is shortcut
//! In stead of setting the Types on all these parameters, we can tell TypeScript which kind of Function we wanna store it in this createTodo constant.

import { RequestHandler } from 'express';
import { Todo } from '../models/todos';

//! To add a todoArray to manage some Todos in memory.
const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  //! I create newtTodo here, when we got an incoming request, that should be a new Object
  //! And why don't we create a Blueprint for this object? (A model)
  //! text: any ? => improve
  //! We can use TypeCasting
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  console.log('run Controldler');
  res.status(201).json({
    message: 'Created the Todo',
    createdTodo: newTodo,
  });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(201).json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ todoId: string }> = (
  req,
  res,
  next
) => {
  const todoId = req.params.todoId;

  const updatedText = (req.body as { text: string }).text;
  //! using TypeCasting,

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  //! guard clause
  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
    //! send Middleware app.use((err, req, res, next)=> {...})
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.status(201).json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ todoId: string }> = (
  req,
  res,
  next
) => {
  const todoId = req.params.todoId;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  //! guard clause
  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
    //! send Middleware app.use((err, req, res, next)=> {...})
  }

  //! mutate original Array TODOS
  TODOS.splice(todoIndex, 1);

  //! response
  res.status(201).json({
    message: 'Todo deleted!',
  });
};
