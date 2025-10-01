import React from "react";

const Dashboard = () => {
  // Fake hardcoded data
  const completedProjects = '100+';
  const currentProjects = 7;
  const totalTeams = 10;

  return (
    <div className="bg-teal-50 p-6 py-20 rounded-2xl flex flex-col items-center">
  <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Dashboard</h1>

  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Completed Projects */}
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      <p className="text-gray-700 mb-2">Projects Completed</p>
      <p className="text-3xl font-bold text-green-400">{completedProjects}</p>
    </div>

    {/* Current Running Projects */}
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      <p className="text-gray-700 mb-2">Current Running Projects</p>
      <p className="text-3xl font-bold text-blue-400">{currentProjects}</p>
    </div>

    {/* Total Teams */}
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      <p className="text-gray-700 mb-2">Total Teams</p>
      <p className="text-3xl font-bold text-yellow-400">{totalTeams}</p>
    </div>
  </div>

  {/* Fake Projects Overview */}
  <div className="w-full max-w-6xl mt-8 bg-white p-4 rounded-xl shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects Overview</h2>
    <ul className="text-gray-900">
      <li className="mb-2 border-b border-gray-200 pb-2">
        <span className="font-semibold">Frontend Revamp</span> - Teams: 3
      </li>
      <li className="mb-2 border-b border-gray-200 pb-2">
        <span className="font-semibold">Backend Migration</span> - Teams: 3
      </li>
      <li className="mb-2 border-b border-gray-200 pb-2">
        <span className="font-semibold">DevOps</span> - Teams: 1
      </li>
    </ul>
  </div>
</div>

  );
};

export default Dashboard;
