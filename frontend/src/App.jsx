import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import API from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProject = async () => {
    try {
      await API.post("/projects", {
        title,
        description,
        members: [],
      });

      setTitle("");
      setDescription("");

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const editProject = (project) => {
    setEditingId(project._id);
    setTitle(project.title);
    setDescription(project.description);
  };

  const updateProject = async () => {
    try {
      await API.put(`/projects/${editingId}`, {
        title,
        description,
      });

      setEditingId(null);
      setTitle("");
      setDescription("");

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/projects/${id}`, {
        status,
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800 text-white">
      <Navbar />

      <div className="p-6 md:p-10">
        <h1 className="text-5xl font-extrabold mb-10">
          Dashboard 🚀
        </h1>

        {/* Create / Update Form */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl mb-10">
          <h2 className="text-3xl font-bold mb-6">
            {editingId
              ? "Update Project ✏️"
              : "Create New Project ✨"}
          </h2>

          <input
            type="text"
            placeholder="Enter project title"
            className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 placeholder-gray-300 mb-5 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter project description"
            className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 placeholder-gray-300 mb-5 focus:outline-none min-h-[120px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {editingId ? (
            <button
              onClick={updateProject}
              className="bg-yellow-500 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Update Project
            </button>
          ) : (
            <button
              onClick={createProject}
              className="bg-gradient-to-r from-pink-500 to-cyan-500 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Create Project
            </button>
          )}
        </div>

        {/* Projects */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Projects 📁
            </h2>

            <span className="bg-white/20 px-4 py-2 rounded-xl text-sm">
              {projects.length} Total
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white/10 border border-white/20 p-6 rounded-3xl hover:scale-[1.02] transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {project.title}
                  </h3>

                  <span className="px-3 py-1 rounded-xl text-sm bg-white/20">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-200 mb-6">
                  {project.description}
                </p>

                {/* Status Buttons */}
                <div className="flex gap-2 flex-wrap mb-5">
                  <button
                    onClick={() =>
                      updateStatus(
                        project._id,
                        "Pending"
                      )
                    }
                    className="bg-yellow-500 px-3 py-2 rounded-xl text-sm"
                  >
                    Pending
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        project._id,
                        "Active"
                      )
                    }
                    className="bg-blue-500 px-3 py-2 rounded-xl text-sm"
                  >
                    Active
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        project._id,
                        "Completed"
                      )
                    }
                    className="bg-green-500 px-3 py-2 rounded-xl text-sm"
                  >
                    Completed
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => editProject(project)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProject(project._id)
                    }
                    className="bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;