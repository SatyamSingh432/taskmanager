import { createTask, updateTask } from "../utils/apis.js";

const Form = ({
  isOpen,
  onClose,
  setFormData,
  formData,
  isEditForm,
  setUpdateData,
  taskId,
}) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditForm) {
      await createTask(formData);
      setUpdateData(formData);
      setFormData({
        title: "",
        description: "",
        deadline: "",
        file: null,
      });
    } else {
      if (taskId) {
        await updateTask(taskId, formData);
        setUpdateData(formData);
        setFormData({
          title: "",
          description: "",
          deadline: "",
          file: null,
        });
      }
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  bg-gray-900/70 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {isEditForm ? "Edit Task" : "Add Task"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title *"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Description *"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="deadline"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
          {!isEditForm && (
            <>
              <label
                htmlFor="file-input"
                className="text-sm font-medium bg-blue-500 px-4 text-white rounded-xs py-2 mb-1 cursor-pointer"
              >
                Upload PDF :
              </label>
              <input
                type="file"
                // style={{ display: "none" }}
                name="file"
                id="file-input"
                accept="application/pdf"
                onChange={handleChange}
                className="text-xs w-[200px] pl-2 cursor-pointer"
              />
            </>
          )}

          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                setFormData({
                  title: "",
                  description: "",
                  deadline: "",
                  file: null,
                });
              }}
              className="text-blue-600 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg cursor-pointer"
            >
              {isEditForm ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
