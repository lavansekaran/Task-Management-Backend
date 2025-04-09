
const Task = require('../Model/taskModel');

exports.getTasks = async (req, res) => {
  const result = await Task.find({ user: req.user });
  res.status(200).json({
    success: true,
    data: result,
  });
};

exports.createTask = async (req, res) => {
  const bodyData = req.body;
  const task = new Task(bodyData);
  await task.save();
  res.status(201).json({
    success:true,
    message:'Successfully Created!',
    data:task
  });
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findOneAndUpdate({ _id: id, user: req.user }, req.body, { new: true });
  if (!result) return res.status(404).json({ error: 'Task not found' });
  res.json({
    success: true,
    message:'Successfully Updated!',
    data: result,
  });
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findOneAndDelete({ _id: id, user: req.user });
  res.json({ message: 'Successfully Deleted!' });
};

exports.getIDData = async (req, res) =>{
    const { id } = req.params;
    const result = await Task.findById({_id: id,});
  res.status(200).json({
    success: true,
    data: result,
  });
}

