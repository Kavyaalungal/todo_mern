// const mongoose = require("mongoose");
import mongoose from "mongoose";
const toDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
});

// module.exports = mongoose.model("ToDo", toDoSchema);

export default mongoose.model.Todos || mongoose.model("Todo", toDoSchema);