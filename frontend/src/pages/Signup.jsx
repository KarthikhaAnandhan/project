import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    accountNumber: "",
    username: "",
    pin: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/signup",
        form
      );

      alert(res.data.message);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Signup Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            type="text"
            placeholder="Account Number"
            value={form.accountNumber}
            onChange={(e) =>
              setForm({
                ...form,
                accountNumber: e.target.value,
              })
            }
            className="border p-3 w-full mb-3 rounded"
          />

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
            placeholder="4 Digit PIN"
            value={form.pin}
            onChange={(e) =>
              setForm({
                ...form,
                pin: e.target.value,
              })
            }
            className="border p-3 w-full mb-3 rounded"
          />

          <button className="bg-blue-500 text-white w-full p-3 rounded">
            Create Account
          </button>

        </form>

        <p className="mt-4 text-center">
          Already have account?
          <Link
            to="/"
            className="text-blue-500 ml-2"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;