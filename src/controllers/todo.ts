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
