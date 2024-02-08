import ToDoModel from "../models/ToDoModel.js";

export const getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.send(toDos);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

export const saveToDo = async (req, res) => {
  try {
    const { toDo } = req.body;
    const newToDo = await ToDoModel.create({ toDo });
    console.log("Saved Successfully...");
    res.status(201).send(newToDo);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

export const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const { toDo } = req.body;
    await ToDoModel.findByIdAndUpdate(id, { toDo });
    res.send("Updated Successfully....");
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

export const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    await ToDoModel.findByIdAndDelete(id);
    res.send("Deleted Successfully....");
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};
