import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTitle from "../../components/PageTitle";
import i18n from "../../i18n/i18n";
import Description from "../../components/Description";
import { Button } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import MovieAdd from "./MovieAdd";
import MovieTable from "./MovieTable";

const Movies = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("path", window.location.pathname);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid justify-center"
    >
      <PageTitle title={i18n.t("movies:title")} />
      <div className="flex gap-2 mb-2 justify-center">
        <Description description={i18n.t("movies:description")} />
        <Button
          className="w-fit"
          variant="contained"
          startIcon={<MovieIcon />}
          sx={{
            backgroundColor: "#A495E7",
            color: "black",
            ":hover": { backgroundColor: "#A495E7", color: "#white" },
          }}
          onClick={() => setOpen(true)}
        >
          {i18n.t("movies:add")}
        </Button>
      </div>
      <MovieAdd open={open} setOpen={setOpen} />
      <MovieTable />
    </motion.div>
  );
};

export default Movies;
