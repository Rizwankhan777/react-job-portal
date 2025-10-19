
import React, { useState } from "react";
import bg_image from "../assets/images/bg-image.png";
import user_image from "../assets/images/user-img.png";
    const upcomingInterviews = [
  { id: 1, jobTitle: "Frontend Developer", date: "2025-10-21", time: "10:00 AM" },
  { id: 2, jobTitle: "UI/UX Designer", date: "2025-10-23", time: "3:30 PM" },
  { id: 3, jobTitle: "Backend Engineer", date: "2025-10-25", time: "11:00 AM" },
];

export default function SidebarProfile({ user }) {
 const [selected, setSelected] = useState("");

  return (
    <aside className="">
     <div className="bg-white rounded-lg shadow-sm flex flex-col items-center text-center pb-4 relative overflow-hidden">
  {/* Background Image */}
  <div
    className="h-22 bg-cover w-full bg-center rounded-t-lg relative"
    style={{ backgroundImage: `url(${bg_image})` }}
  >
    {/* User Image overlapping the bottom */}
    <img
      src={user_image}
      alt="User"
      className="w-20 h-20 rounded-full absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 object-cover"
    />
  </div>

  {/* User Details */}
  <div className="mt-12 flex flex-col items-center gap-1">
    {/* <img src={user_image} alt="" /> */}
    <div className="text-lg font-semibold text-gray-800">{user.name}</div>
    <div className="text-sm text-gray-600">{user.title}</div>
    <div className="text-xs text-gray-500">{user.location}</div>
  </div>
</div>

      <ul className="bg-white p-4 rounded-lg shadow-sm mt-3 space-y-2 text-sm text-gray-700">
        <li className="flex justify-between border-b border-gray-200 pb-2">
          <span>Profile Visitors</span>
          <p className="text-[#0154AA]">{user.profileStats.visitors}</p>
        </li>
        <li className="flex justify-between border-b border-gray-200 pb-2 ">
          <span>Resume Viewers</span>
          <p className="text-[#0154AA]">{user.profileStats.resumeViewers}</p>
        </li>
        <li className="flex justify-between">
          <span>My Jobs</span>
          <p className="text-[#0154AA]">{user.profileStats.myJobs}</p>
        </li>
      </ul>

      <div className="bg-white p-4 font-semibold rounded-lg shadow-sm mt-3  rounded text-sm ">
         <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full  text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0154AA]"
      >
        <option value="">My Calendar</option>

        {upcomingInterviews.map((interview) => (
          <option key={interview.id} value={interview.jobTitle}>
            {interview.jobTitle} — {interview.date} ({interview.time})
          </option>
        ))}
      </select>
     

        <br/>
      <small className="text-gray-500">Upcoming Interviews</small>
      </div>
    </aside>
  );
}
