import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Series = () => {
  useEffect(() => {
    localStorage.setItem("path", window.location.pathname);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Series
    </motion.div>
  );
};

export default Series;
