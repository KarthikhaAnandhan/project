import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    pin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-3xl shadow-2xl">

        <h1 className="text-4xl text-center font-bold text-white mb-8">
          Open Account
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-800 text-white mb-4"
          />

          <input
            placeholder="Username"
            className="w-full p-4 rounded-xl bg-slate-800 text-white mb-4"
          />

          <input
            placeholder="4 Digit PIN"
            maxLength={4}
            className="w-full p-4 rounded-xl bg-slate-800 text-white mb-6"
          />

          <button
            className="w-full bg-blue-500 p-4 rounded-xl text-white font-bold"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-5 text-slate-400">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-400"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;