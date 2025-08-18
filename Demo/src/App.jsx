import { useState } from 'react'
import './App.css'


export  function App() {
  
  const [query, setQuery] = useState("");
  const [manualSteps, setManualSteps] = useState([]);
  const [binoResults, setBinoResults] = useState([]);

  const manualTimeline = [
    "Open Website 1 → search product → note price",
    "Open Website 2 → search product → note price",
    "Open Website 3 → search product → note price",
  ];

  const binoDemoResults = [
    { name: "Laptop A", price: "₹48,999" },
    { name: "Laptop B", price: "₹49,500" },
    { name: "Laptop C", price: "₹50,000" },
  ];

  const handleSearch = () => {
    setManualSteps([]);
    setBinoResults([]);

    // Simulate manual search step by step
    manualTimeline.forEach((step, index) => {
      setTimeout(() => {
        setManualSteps((prev) => [...prev, step]);
      }, (index + 1) * 2000); // 2 seconds per step
    });

    // Simulate Bino instant results
    setTimeout(() => {
      setBinoResults(binoDemoResults);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Quick Demo: Manual vs Bino Search
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Manual Search */}
        <div className="flex-1 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Manual Search</h2>
          <div className="space-y-2">
            {manualSteps.length === 0 && <p>Waiting for steps...</p>}
            {manualSteps.map((step, idx) => (
              <p key={idx} className="bg-yellow-100 p-2 rounded">{step}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Bino Search */}
        <div className="flex-1 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Bino Search</h2>
          <div className="space-y-2">
            {binoResults.length === 0 ? (
              <p>Waiting for results...</p>
            ) : (
              binoResults.map((item, idx) => (
                <div key={idx} className="bg-green-100 p-2 rounded">
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Input & Button */}
      <div className="mt-6 text-center">
        <input
          type="text"
          placeholder="Type your product..."
          className="border border-gray-300 rounded p-2 w-64 mr-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}


export default App
