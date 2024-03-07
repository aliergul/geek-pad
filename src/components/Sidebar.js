import React from "react";
import Tabs from "./Sidebar/Tabs";
import User from "./Sidebar/User";

const Sidebar = () => {
  return (
    <div className="pt-6 flex-shrink-0 flex-col">
      <User />
      <Tabs />
    </div>
  );
};

export default Sidebar;
