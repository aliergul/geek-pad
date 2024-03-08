import React from "react";
import { motion } from "framer-motion";

const Series = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Series
    </motion.div>
  );
};

export default Series;
