import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import TableTask from "./components/TableTask";
import Form from "./components/Form";
import { getTasks } from "./utils/Apis";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditForm, setEditForm] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [updatedData, setUpdateData] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    file: null,
  });

  useEffect(() => {
    const res = async () => {
      const data = await getTasks();
      console.log(data);
      setAllTasks(data);
    };
    res();
  }, [isEditForm, updatedData]);

  const handleSaveTask = (formData) => {
    console.log("Task data submitted:", formData);
  };
  return (
    <div>
      <NavBar />
      <div className="bg-white  w-screen flex justify-center pt-6 ">
        <table className="text-sm shadow-xl">
          <tr className=" text-left text-gray-600 font-semibold border-b border-gray-300 ">
            <th className="px-2 w-[120px] py-4">Title</th>
            <th className="px-2  w-[300px] py-4">Description</th>
            <th className="px-2  w-[180px] py-4">Deadline</th>
            <th className="px-2  w-[120px] py-4">Status</th>
            <th className="px-2  w-[180px] py-4"> Action</th>
          </tr>
          {allTasks?.map((ele) => {
            const dateObj = new Date(ele.deadline);
            const formatted = dateObj.toLocaleDateString("en-IN");
            return (
              <TableTask
                key={ele._id}
                title={ele.title}
                description={ele.description}
                deadline={formatted}
                status={ele.status}
                setIsModalOpen={setIsModalOpen}
                setEditForm={setEditForm}
              />
            );
          })}
        </table>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white  rounded-full px-4 py-2 shadow-lg text-xl"
      >
        +
      </button>
      <Form
        formData={formData}
        setFormData={setFormData}
        isEditForm={isEditForm}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditForm(false);
        }}
        onSave={handleSaveTask}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
