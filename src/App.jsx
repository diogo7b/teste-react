import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TitlePage from "./components/TitlePage";

export default function App() {
  const [task, setTask] = useState([
    {
      id: '1',
      title: 'estudar',
      descricao: 'estudar mais profundamente',
      isCompleted: false
    },
    {
      id: '2',
      title: 'estudar',
      descricao: 'estudar mais profundamente',
      isCompleted: false
    }
  ])
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <TitlePage />
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}


