import React from "react";
import Tabs from "./Sidebar/Tabs";
import User from "./Sidebar/User";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="pt-6 flex-shrink-0 flex-col"
    >
      <User />
      <Tabs />
    </motion.div>
  );
};

export default Sidebar;
