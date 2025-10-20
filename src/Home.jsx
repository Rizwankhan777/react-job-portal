import React, { useState } from 'react';
import Header from './components/Header';
import SidebarProfile from './components/SidebarProfile';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import { jobs } from './data/jobs';

const sampleUser = {
  name: 'Albert Flores',
  title: 'Senior Product Designer | UI/UX Designer',
  location: 'Clinton, Maryland',
  profileStats: { visitors: 140, resumeViewers: 20, myJobs: 88 }
};

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = ({ searchTerm, location, jobType }) => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        !searchTerm ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.team.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        !location || job.location.toLowerCase().includes(location.toLowerCase());

      const matchesType =
        !jobType || job.title.toLowerCase().includes(jobType.toLowerCase());

      return matchesSearch && matchesLocation && matchesType;
    });

    setFilteredJobs(filtered);
    setIsSearching(true);
  };

  const handleClearClick = () => {
   setSearchTerm("");
    setLocation("");
    setJobType("");
    setFilteredJobs(jobs);
    setIsSearching(false); 
   
  };


  const featuredJobs = jobs.filter(job => job.category === 'featured');
  const recommendedJobs = jobs.filter(job => job.category === 'recommended');
  const latestJobs = jobs.filter(job => job.category === 'latest');

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-gray-800">
      <Header />

      <main className="container-max mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <SidebarProfile user={sampleUser} />
        </div>

        <div className="md:col-span-3 space-y-4">
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            location={location}
            setLocation={setLocation}
            jobType={jobType}
            setJobType={setJobType}
            onSearch={handleSearch}
           />

          {/* ✅ Show filtered results if search is active */}
          {isSearching ? (
            <JobList
              title="Search Results"
              linkText="Clear Search"
              onClick={handleClearClick}
              jobs={filteredJobs}
            />
          ) : (
            <>
              <JobList title="Featured Jobs" linkText="See Featured Jobs" jobs={featuredJobs} />
              <JobList title="Recommended Jobs" linkText="See Recommended Jobs" jobs={recommendedJobs} />
              <JobList title="Latest Jobs" linkText="See Latest Jobs" jobs={latestJobs} />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
