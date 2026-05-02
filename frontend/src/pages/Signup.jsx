import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signupUser = async () => {
    try {
      setLoading(true);

      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Signup successful 🎉");

      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message || "Signup failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-cyan-700 overflow-hidden relative px-4">
      {/* Animated Background Glow */}
      <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2 tracking-wide">
            Create Account ✨
          </h1>

          <p className="text-gray-200 text-sm">
            Join the Team Task Manager and organize your workflow.
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
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
            placeholder="Create a password"
            className="w-full p-4 rounded-xl bg-white/20 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={signupUser}
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 font-bold text-lg"
        >
          {loading ? "Creating Account..." : "Signup"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="px-3 text-sm text-gray-300">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-200">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-yellow-300 hover:text-yellow-200 transition"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
