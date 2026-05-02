import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful 🚀");

      navigate("/");
    } catch (error) {
      alert("Invalid credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden relative px-4">
      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2 tracking-wide">
            Welcome Back 👋
          </h1>

          <p className="text-gray-200 text-sm">
            Login to manage your projects and tasks efficiently.
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={loginUser}
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 font-bold text-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="px-3 text-sm text-gray-300">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-200">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-bold text-yellow-300 hover:text-yellow-200 transition"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

