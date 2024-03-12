import React from "react";
import Tabs from "./Sidebar/Tabs";
import User from "./Sidebar/User";
import { motion } from "framer-motion";
import Language from "./Sidebar/Language";

const Sidebar = () => {
  return (
    <div className="grid">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="pt-6 flex-shrink-0 flex-col"
      >
        <User />
        <Tabs />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="pt-6 mt-auto mb-4"
      >
        <Language />
      </motion.div>
    </div>
  );
};

export default Sidebar;
