const express = require('express');
const { getTasks, createTask, updateTask, deleteTask , getIDData} = require('../Controllers/taskController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(auth, getTasks)
  .post(auth, createTask)
router.route('/:id')
   .get(auth, getIDData)
   .put( auth, updateTask)
   .delete(auth, deleteTask)

module.exports = router;
