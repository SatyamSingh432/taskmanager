import React from "react";
import { FaTrash, FaDownload } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const TableTask = ({ title, description, deadline, status }) => {
  return (
    <tr className="border-b border-gray-300 text-left text-xs hover:bg-gray-50 py-5">
      <td className="px-2  py-4">{title}</td>
      <td className="px-2  py-4">{description}</td>
      <td className="px-2  py-4">{deadline}</td>
      <td className="px-2  py-4">
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${
            status === "TODO" ? "bg-orange-500" : "bg-green-600"
          }`}
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
          className="text-purple-600 hover:text-purple-800 px-4 cursor-pointer"
        >
          <MdModeEdit />
        </button>
        <button
          title="Delete"
          className="text-red-600 hover:text-red-800 cursor-pointer"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TableTask;
