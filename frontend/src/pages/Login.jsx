import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    pin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.pin) {
      alert("Enter Username and PIN");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Secure ATM
          </h1>
          <p className="text-slate-400 mt-2">
            Login to your account
          </p>
        </div>

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
            className="w-full p-4 rounded-xl bg-slate-800 text-white mb-4 outline-none"
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
            className="w-full p-4 rounded-xl bg-slate-800 text-white mb-6 outline-none"
          />

          <button
            className="w-full bg-emerald-500 hover:bg-emerald-600 transition p-4 rounded-xl text-white font-bold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          New Customer?{" "}
          <Link
            to="/signup"
            className="text-emerald-400"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;