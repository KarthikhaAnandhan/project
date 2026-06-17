import { useState } from "react";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (type, value) => {
    setTransactions([
      {
        type,
        amount: value,
        time: new Date().toLocaleString(),
      },
      ...transactions,
    ]);
  };

  const depositMoney = () => {
    const value = Number(amount);

    if (value <= 0) {
      alert("Enter valid amount");
      return;
    }

    setBalance(balance + value);
    addTransaction("Deposit", value);
    setAmount("");
  };

  const withdrawMoney = () => {
    const value = Number(amount);

    if (value <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (value > balance) {
      alert("Insufficient Balance");
      return;
    }

    setBalance(balance - value);
    addTransaction("Withdraw", value);
    setAmount("");
  };

  const transferMoney = () => {
    const value = Number(amount);

    if (value <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (value > balance) {
      alert("Insufficient Balance");
      return;
    }

    setBalance(balance - value);
    addTransaction("Transfer", value);
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">ATM Dashboard</h1>
        <button className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </nav>

      <div className="max-w-5xl mx-auto p-6">

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold">
            Available Balance
          </h2>

          <h1 className="text-5xl font-bold text-green-600 mt-3">
            ₹ {balance}
          </h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <button
            onClick={depositMoney}
            className="bg-green-500 text-white p-4 rounded-xl"
          >
            Deposit
          </button>

          <button
            onClick={withdrawMoney}
            className="bg-red-500 text-white p-4 rounded-xl"
          >
            Withdraw
          </button>

          <button
            onClick={transferMoney}
            className="bg-blue-500 text-white p-4 rounded-xl"
          >
            Transfer
          </button>

        </div>

        <div className="bg-white mt-8 p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            Transaction History
          </h2>

          {transactions.length === 0 ? (
            <p>No Transactions Yet</p>
          ) : (
            transactions.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-3"
              >
                <div>
                  <p className="font-semibold">
                    {item.type}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.time}
                  </p>
                </div>

                <p>
                  ₹ {item.amount}
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;