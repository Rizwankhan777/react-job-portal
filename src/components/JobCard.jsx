import { FiBriefcase, FiMapPin, FiClock, FiBookmark } from "react-icons/fi";
import React from 'react';

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 mb-3 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <p className="pb-2 text-sm font-medium text-[#333333]">{job.promoted}</p>

        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
            <FiBriefcase className="text-blue-600 text-lg" />
          </div>
          <div className="ml-2">
            <h3 className="text-sm  text-gray-800">{job.title}</h3>
            <p className="text-xs text-gray-500">{job.team}</p>
          </div>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <p className="flex items-center gap-1">
            <FiMapPin className="text-blue-500" /> {job.location}
          </p>
          <p className="flex items-center gap-1">
            <FiClock className="text-blue-500" /> {job.age} |{" "}
            <span className="text-blue-600">{job.applicants} applicants</span>
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <button className="bg-[#0154AA] text-white rounded-[6px] text-sm py-1.5 px-5 hover:bg-blue-700">
          Apply Now
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <FiBookmark className="text-lg" />
        </button>
      </div>
    </div>
  );
}
