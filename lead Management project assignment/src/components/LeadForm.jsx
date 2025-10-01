import React, { useState } from "react";
import LeadList from "./LeadList";

const LeadForm = () => {
  const [owner, setOwner] = useState("");
  const [department, setDepartment] = useState("");
  const [lead, setLead] = useState("");
  const [status, setStatus] = useState("Working");
  const [duration, setDuration] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [teams, setTeams] = useState([]);
  const addTeam = (team) => setTeams([...teams, team]);
  const deleteTeam = (index) => setTeams(teams.filter((_, i) => i !== index));

  const departmentOptions = ["Frontend", "Backend", "DevOps", "AI", "ML"];
  // const priorityOptions = ["High", "Medium", "Low"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!owner || !department || !lead) return;
    addTeam({ owner, department, lead, status, duration, priority });
    setOwner("");
    setDepartment("");
    setLead("");
    setStatus("Working");
    setDuration("");
    setPriority("Medium");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-7xl bg-purple-300 shadow-lg rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Add Team to Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Owner / Project"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-yellow-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Team Lead"
              value={lead}
              onChange={(e) => setLead(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-yellow-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-yellow-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Department</option>
              {departmentOptions.map((d, idx) => (
                <option key={idx} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-yellow-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option>Working</option>
              <option>Pending</option>
              <option>Closed</option>
            </select>
            <input
              type="text"
              placeholder="Task Duration (e.g., 3 days)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-yellow-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-yellow-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {["High", "Medium", "Low"].map((p, idx) => (
                <option key={idx} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-pink-200 text-gray-900 font-semibold py-3 rounded-lg hover:bg-pink-300 transition duration-200"
        >
          Add Team
        </button>
      </form>
      <LeadList teams={teams} deleteTeam={deleteTeam} />
    </>
  );
};

export default LeadForm;
