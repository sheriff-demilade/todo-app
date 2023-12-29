import { useDispatch } from "react-redux";
import { setIsDone } from "../redux/TasksSlice";
import { useState } from "react";
import AddTask from "./Addtask";

const Task = ({ id, description, isDone }) => {
  // This component JSX is divided into two ui: the first part display the task contents while the other (<AddTask/>) allows you to edit the task contents and this ui is only displayed if the edit button is clicked

  const task = { id, description, isDone };
  const [showEditTask, setShowEditTask] = useState(true);
  const dispatch = useDispatch();
  const isDoneHandler = () => {
    dispatch(setIsDone({ id, description, isDone: true }));
  };

  const toggleShowEditTask = () => {
    setShowEditTask((prev) => !prev);
  };

  return (
    <li className="">
      {showEditTask ? (
        <div className="flex items-center gap-4">
          <p className=" w-72 truncate bg-gray-100 p-2 rounded">
            {description}{" "}
          </p>
          <button
            onClick={isDoneHandler}
            type="button"
            className={`${
              isDone ? "bg-green-400" : "bg-orange-400 "
            } py-2 px-6 font-semibold text-white  rounded shadow`}
          >
            Done
          </button>
          <button
            onClick={toggleShowEditTask}
            type="button"
            className="py-2 px-6 font-semibold text-white bg-yellow-400 rounded shadow"
          >
            Edit
          </button>
        </div>
      ) : (
        <AddTask
          task={task}
          buttonText="Update"
          onUpdateClick={toggleShowEditTask}
        />
      )}
    </li>
  );
};

export default Task;
