import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/TasksSlice";

const AddTask = ({ task, onUpdateClick, buttonText = "Add Task" }) => {
  const dispatch = useDispatch();

  // This state is used to keep track of the input
  const [description, setDescription] = useState("");

  // The purpose of this useEffect is to let the description state to contain the text meant to be edited if edit (addtask) is mounted.
  useEffect(() => {
    if (task) {
      setDescription(task.description);
    }
  }, []);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      // This part is responsible for the task to be edited
      onUpdateClick();
      if (description)
        dispatch(editTask({ id: task.id, description, isDone: false }));
      setDescription("");
    } else {
      // This part is responsible for the task to be added for the first time
      const id = Date.now();
      const isDone = false;
      if (description) dispatch(addTask({ id, description, isDone }));
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <input
        className=" w-72 bg-gray-100 p-2 rounded focus:outline-none border border-gray-300"
        placeholder="Write Task"
        type="text"
        value={description}
        onChange={handleChange}
      />
      <button className="py-2 px-6 font-semibold text-white bg-blue-400 rounded shadow">
        {buttonText}
      </button>
    </form>
  );
};

export default AddTask;
