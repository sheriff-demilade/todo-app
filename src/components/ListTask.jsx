import { useSelector } from "react-redux";
import Task from "./Task";
import { useState } from "react";

const ListTask = () => {
  const allTask = useSelector((state) => state.taskList.tasks);

  // This state is used to toggle either all task will be listed or all done task will be listed
  const [showDoneTask, setShowDoneTask] = useState(false);

  const handleClick = () => setShowDoneTask((prev) => !prev);

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className=" inline-block my-6 py-2 px-6 font-semibold text-white bg-green-400 rounded shadow"
      >
        {showDoneTask ? "Show All task " : "Show Done Tasks"}
      </button>
      <ul className=" space-y-4">
        {showDoneTask
          ? allTask
              .filter(({ isDone }) => isDone === true)
              .map((task) => <Task key={task.id} {...task} />)
          : allTask.map((task) => <Task key={task.id} {...task} />)}
      </ul>
    </div>
  );
};

export default ListTask;
