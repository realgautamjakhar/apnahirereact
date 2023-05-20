import React from "react";
import { PreviousJobs } from "../../data/PreviousJobs";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="w-full  h-full p-4 flex flex-col gap-4">
      <Link
        to="/post-job"
        className=" bg-blue-500 text-white px-4 py-2 rounded-md  ml-auto my-6 mr-4"
      >
        Post Job
      </Link>
      <div className="grid gap-4">
        {PreviousJobs.map((job, index) => {
          return (
            <div
              key={index}
              className=" w-full rounded-md bg-white p-4 grid md:grid-cols-2 gap-2"
            >
              <div>
                <h2 className=" text-lg font-medium text-gray-900">
                  {job.jobTitle}
                </h2>
                <div className=" flex items-center gap-4 text-gray-700 text-xs">
                  <p>{job.location}</p>|<p>Posted on : {job.posted}</p>
                </div>
              </div>
              <div>
                <h2 className=" text-xs text-gray-700">
                  Total Application : {job.applications.length}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
