import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    pin: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/login",
        form
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          ATM Login
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            type="password"
            maxLength={4}
            placeholder="PIN"
            value={form.pin}
            onChange={(e) =>
              setForm({
                ...form,
                pin: e.target.value,
              })
            }
            className="border p-3 w-full mb-3 rounded"
          />

          <button className="bg-green-500 text-white w-full p-3 rounded">
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          New User?
          <Link
            to="/signup"
            className="text-green-500 ml-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;