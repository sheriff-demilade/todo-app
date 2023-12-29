import AddTask from "./components/Addtask";
import ListTask from "./components/ListTask";

const App = () => {
  return (
    <div className=" max-w-lg mx-auto pt-10">
      <h1 className=" text-center text-3xl font-bold text-gray-400 mb-14">
        Todo App
      </h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
