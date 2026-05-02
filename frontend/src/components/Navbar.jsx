import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
            🚀
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
              Team Task Manager
            </h1>

            <p className="text-sm text-gray-300">
              Manage projects smarter
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/20">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-sm text-gray-200">
              Online
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
