import React from "react";

const LeadList = ({ teams, deleteTeam }) => {

  if (teams.length === 0) {
    return (
      <p className="text-gray-700 w-1/3 border text-center p-3 py-10 rounded-xl bg-yellow-50">
        No teams added yet.
      </p>
    );
  }

  return (
    <div className="w-full max-w-7xl bg-white border-2 border-gray-200 rounded-xl shadow-lg p-4 overflow-x-auto">
      <h2 className="text-2xl text-gray-900 font-semibold mb-4">Lead List</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-yellow-50">
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-900">Owner / Project</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-900">Department</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-900">Team Lead</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-900">Status</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-900">Duration</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-900">Priority</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-900">Action</th>
          </tr>
        </thead>
        <tbody className="bg-teal-50">
          {teams.map((team, index) => (
            <tr key={index} className="hover:bg-teal-100 transition">
              <td className="px-4 py-2 border-b border-gray-200 text-gray-900">{team.owner}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-gray-900">{team.department}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-gray-900">{team.lead}</td>
              <td className="px-4 py-2 border-b border-gray-200">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    team.status === "Working"
                      ? "bg-blue-400 text-white"
                      : team.status === "Pending"
                      ? "bg-yellow-300 text-gray-900"
                      : "bg-green-400 text-white"
                  }`}
                >
                  {team.status}
                </span>
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-gray-900 font-semibold">
                {team.duration} <strong>days</strong>
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                <span
                  className={`px-3 py-2 rounded-full text-xs font-medium ${
                    team.priority === "High"
                      ? "bg-red-400 text-white"
                      : team.priority === "Medium"
                      ? "bg-yellow-300 text-gray-900"
                      : "bg-green-300 text-gray-900"
                  }`}
                >
                  {team.priority}
                </span>
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                <button
                  onClick={() => deleteTeam(index)}
                  className="bg-pink-400 hover:bg-pink-300 text-gray-900 py-1 px-3 rounded transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadList;
