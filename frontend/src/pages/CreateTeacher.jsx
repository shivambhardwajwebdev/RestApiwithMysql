import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function CreateTeacher() {
  const navigate = useNavigate(); // ✅ inside component

  const [form, setForm] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    university_name: "",
    gender: "",
    year_joined: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/teachers/create", form);

      alert("Teacher Created");

      // ✅ redirect after creation
      navigate("/teachers");

    } catch (err) {
      console.error(err);
      alert("Error creating teacher");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        
        {/* Header + Navigation */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Create Teacher
          </h2>

          <button
            type="button"
            onClick={() => navigate("/teachers")}
            className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            View Teachers →
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          {/* University */}
          <div>
            <label className="block text-sm font-medium mb-1">University</label>
            <input
              type="text"
              placeholder="Enter university name"
              className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) =>
                setForm({ ...form, university_name: e.target.value })
              }
              required
            />
          </div>

          {/* Gender + Year */}
          <div className="grid grid-cols-2 gap-4">
            
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value })
                }
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Year Joined
              </label>
              <input
                type="number"
                placeholder="2022"
                className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e) =>
                  setForm({ ...form, year_joined: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Create Teacher
          </button>

        </form>
      </div>
    </div>
  );
}