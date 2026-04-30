import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import API from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Total Projects
            </h3>

            <p className="text-3xl font-bold mt-2">
              {projects.length}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="text-2xl font-bold mb-4">
            Create Project
          </h3>

          <input
            type="text"
            placeholder="Project title"
            className="w-full border p-3 rounded mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Project description"
            className="w-full border p-3 rounded mb-4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={createProject}
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Create Project
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-4">
            Projects
          </h3>

          {projects.map((project) => (
            <div
              key={project._id}
              className="border p-4 rounded-lg mb-4"
            >
              <h4 className="text-xl font-semibold">
                {project.title}
              </h4>

              <p className="text-gray-600 mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;