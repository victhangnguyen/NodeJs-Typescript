import express, { Request, Response, NextFunction } from 'express';
//! imp Routes
import todoRoutes from './routes/todos';

const app = express();

//! add Middleware (statis json of express)
app.use(express.json());

app.use('/todos', todoRoutes);

//! We can also setup a Middle that will handle errors

// app.use((req, res, next) => {});
//! have a alternative to this function, a function have 4 parameters
//! the fist parametter is a potential Error

//! Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //! Whenever we have an Error in one of our other Middlerwares
  res.status(500).json({ message: err.message });
});

app.listen(3000);
