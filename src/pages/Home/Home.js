import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Home
    </motion.div>
  );
};

export default Home;
