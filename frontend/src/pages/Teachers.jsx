import { useEffect, useState } from "react";
import API from "../api/api";

export default function Teachers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/teachers")
      .then(res => setData(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  return (
<div className="p-6">
  <h2 className="text-xl font-semibold mb-4">Teachers List</h2>

  <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
    <thead className="bg-black text-white">
      <tr>
        <th className="p-2">Name</th>
        <th className="p-2">Email</th>
        <th className="p-2">University</th>
      </tr>
    </thead>

    <tbody>
      {data.map((t) => (
        <tr key={t.id} className="text-center border-t hover:bg-gray-100">
          <td className="p-2">{t.first_name} {t.last_name}</td>
          <td className="p-2">{t.email}</td>
          <td className="p-2">{t.university_name}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}