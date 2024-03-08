import React from "react";
import { motion } from "framer-motion";

const Notepad = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Notepad
    </motion.div>
  );
};

export default Notepad;
