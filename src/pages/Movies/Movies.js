import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Movies = () => {
  useEffect(() => {
    localStorage.setItem("path", window.location.pathname);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid justify-center"
    >
      Movies
      <div>header</div>
      <div>tablo</div>
    </motion.div>
  );
};

export default Movies;
