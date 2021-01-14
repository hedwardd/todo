/**
 * Libraries
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * Schemas and Models
 */
const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    dueDate: { type: Date, required: true },
    isDone: { type: Boolean, required: true },
  },
);
const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };
