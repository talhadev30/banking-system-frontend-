import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex gap-x-2">
        <div className="w-5 h-5 bg-[#d991c2] rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-[#9869b8] rounded-full animate-pulse"></div>
        <div className="w-5 h-5 bg-[#6756cc] rounded-full animate-pulse"></div>
      </div>

      <span className="mt-4 text-gray-600 font-medium">
        Please wait...
      </span>
    </div>
  );
};

export default Loading;