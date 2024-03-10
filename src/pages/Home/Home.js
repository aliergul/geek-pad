import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("path", window.location.pathname);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Home
    </motion.div>
  );
};

export default Home;
