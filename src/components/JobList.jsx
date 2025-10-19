
import React from 'react';
import JobCard from './JobCard';

export default function JobList({ title, linkText, jobs }) {
  return (
    <section className="mb-8">
      <div className="flex gap-3 items-center mb-4">
        <h2 className="text-2xl text-gray-800">{title}</h2>
        <a href="#" className="text-[#0154AA] text-md border-b ">{linkText}</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </section>
  );
}
