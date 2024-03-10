import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center font-bold text-4xl h-40">
      {title}
    </div>
  );
};

export default PageTitle;
