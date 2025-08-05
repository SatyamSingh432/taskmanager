import React from "react";
import { FaTrash, FaDownload } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { deleteTask, updateTask } from "../utils/Apis";

const TableTask = ({
  title,
  description,
  taskDelete,
  deadline,
  status,
  setIsModalOpen,
  setEditForm,
  setFormData,
  setTaskId,
  setUpdateData,
}) => {
  const editHandler = () => {
    setIsModalOpen(true);
    setEditForm(true);
    setTaskId();
    setFormData({
      title,
      deadline,
      description,
    });
  };

  return (
    <tr className="border-b border-gray-300 text-left text-xs hover:bg-gray-50 py-5">
      <td className="px-2  py-4">{title}</td>
      <td className="px-2  py-4">{description}</td>
      <td className="px-2  py-4">
        <div>{new Date(deadline).toLocaleDateString()}</div>
        <div className="text-xs text-gray-500">
          {status === "DONE"
            ? "Achieved"
            : new Date(deadline) < new Date()
            ? "Failed"
            : "In Progress"}
        </div>
      </td>
      <td className="px-2  py-4">
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${
            status === "TODO" ? "bg-orange-500" : "bg-green-600"
          } cursor-pointer`}
          onClick={async () => {
            if (status === "TODO") {
              const statusToggle = {
                title,
                description,
                deadline,
                status: "DONE",
              };
              await updateTask(taskDelete, statusToggle);
              setUpdateData(statusToggle);
            } else {
              const statusToggle = {
                title,
                description,
                deadline,
                status: "TODO",
              };
              await updateTask(taskDelete, statusToggle);
              setUpdateData(statusToggle);
            }
          }}
        >
          {status}
        </span>
      </td>
      <td className="px-2  py-3">
        <button
          title="Download"
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          <FaDownload />
        </button>

        <button
          title="Edit"
          onClick={editHandler}
          className="text-purple-600 hover:text-purple-800 px-4 cursor-pointer"
        >
          <MdModeEdit />
        </button>
        <button
          title="Delete"
          onClick={async () => {
            await deleteTask(taskDelete);
            setUpdateData({});
          }}
          className="text-red-600 hover:text-red-800 cursor-pointer"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TableTask;
