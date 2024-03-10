import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Notepad = () => {
  useEffect(() => {
    localStorage.setItem("path", window.location.pathname);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Notepad
    </motion.div>
  );
};

export default Notepad;
