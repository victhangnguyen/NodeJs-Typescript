// const express = require('express');
// const Router = express.Router;

import { Router } from 'express';

const router = Router();

router.post('/');

router.get('/');

router.patch('/:todoId'); //! to update a Todo by Id

router.delete('/:todoId'); //! delete an Todo by Id

export default router;
