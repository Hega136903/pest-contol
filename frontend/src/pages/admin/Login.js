
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = (
  process.env.REACT_APP_API_URL ||
  "http://localhost:5000"
).replace(/\/$/, "");

const AdminLogin = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverStarting, setServerStarting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    setServerStarting(false);
    const startupTimer = setTimeout(() => setServerStarting(true), 2500);

    try {
      console.log("Login API:", `${API_URL}/api/admin/login`);

      const res = await fetch(
        `${API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await res.json();

      console.log("Login response:", data);

      if (!res.ok || !data.token) {
        throw new Error(
          data.error || "Invalid username or password"
        );
      }

      // Save JWT
      localStorage.setItem(
        "adminToken",
        data.token
      );

      console.log("Admin token saved");

      // Go to dashboard
      navigate("/admin");

    } catch (error) {
      console.error("Login error:", error);

      setError(
        error.message ||
        "Unable to login. Please try again."
      );
    } finally {
      clearTimeout(startupTimer);
      setServerStarting(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-xl shadow-lg p-8">

          {/* Header */}

          <div className="text-center mb-8">

            <div className="text-5xl mb-4">
              🔐
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Admin Login
            </h1>

            <p className="text-gray-500 mt-2">
              Pest Control Management
            </p>

          </div>

          {/* Error */}

          {error && (
            <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          {serverStarting && (
            <div className="mb-5 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg px-4 py-3 text-sm" role="status">
              The server is starting. The first request may take up to a minute; please keep this page open.
            </div>
          )}

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Username */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                placeholder="Enter username"
                required
                autoComplete="username"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

            </div>

            {/* Password */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
                required
                autoComplete="current-password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

            </div>

            {/* Login */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AdminLogin;


