import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import API from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800 text-white overflow-hidden relative">
      {/* Animated Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <Navbar />

      <div className="relative z-10 p-6 md:p-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold mb-3">
            Dashboard 🚀
          </h1>

          <p className="text-gray-300 text-lg">
            Manage your projects and tasks efficiently.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">
            <h3 className="text-gray-300 text-lg">
              Total Projects
            </h3>

            <p className="text-5xl font-extrabold mt-4 text-cyan-300">
              {projects.length}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">
            <h3 className="text-gray-300 text-lg">
              Active Workspace
            </h3>

            <p className="text-3xl font-bold mt-4 text-pink-300">
              Team Manager
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">
            <h3 className="text-gray-300 text-lg">
              Productivity
            </h3>

            <p className="text-3xl font-bold mt-4 text-yellow-300">
              High ⚡
            </p>
          </div>
        </div>

        {/* Create Project Section */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl mb-10">
          <h2 className="text-3xl font-bold mb-6">
            Create New Project ✨
          </h2>

          <input
            type="text"
            placeholder="Enter project title"
            className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 placeholder-gray-300 mb-5 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter project description"
            className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 placeholder-gray-300 mb-5 focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[140px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={createProject}
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-cyan-500 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </div>

        {/* Projects Section */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Projects 📁
            </h2>

            <span className="bg-white/20 px-4 py-2 rounded-xl text-sm">
              {projects.length} Total
            </span>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-16 text-gray-300">
              <h3 className="text-2xl font-bold mb-3">
                No Projects Yet 😔
              </h3>

              <p>Create your first project to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white/10 border border-white/20 p-6 rounded-3xl hover:scale-105 hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-200 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-gray-300">
                      Project Workspace
                    </span>

                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-xl hover:scale-105 transition">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;