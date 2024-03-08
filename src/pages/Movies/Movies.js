import React from "react";
import { motion } from "framer-motion";

const Movies = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Movies
    </motion.div>
  );
};

export default Movies;
