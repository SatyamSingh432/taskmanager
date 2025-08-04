import NavBar from "./components/NavBar";
import TableTask from "./components/TableTask";
import "./App.css";
const tasks = [
  {
    _id: "1",
    title: "Learn React",
    description: "Refer to!!",
    deadline: "2024-08-19",
    status: "DONE",
    linkedFile: true,
  },
  {
    _id: "2",
    title: "Test",
    description: "Test",
    deadline: "2024-08-16",
    status: "TODO",
    linkedFile: false,
  },
  {
    _id: "3",
    title: "Sample Task",
    description: "Test description",
    deadline: "2024-08-17",
    status: "DONE",
    linkedFile: true,
  },
];
function App() {
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
          {tasks.map((ele) => {
            return (
              <TableTask
                key={ele.id}
                title={ele.title}
                description={ele.description}
                deadline={ele.deadline}
                status={ele.status}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
