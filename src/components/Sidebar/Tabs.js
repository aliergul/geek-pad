import React from "react";
import i18n from "../../i18n/i18n";
import { NavLink } from "react-router-dom";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { motion } from "framer-motion";

const Tabs = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col gap-2">
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            activeClassName="bg-active"
            exact
            to={"/#"}
            className="transition-all h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span className="transition-all">
              <HomeIcon />
            </span>
            {i18n.t("tabs:home")}
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            activeClassName="bg-active"
            exact
            to={"/movies"}
            className="transition-all h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span className="transition-all">
              <MovieIcon />
            </span>
            {i18n.t("tabs:movies")}
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            activeClassName="bg-active"
            exact
            to={"/series"}
            className="transition-all h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span className="transition-all">
              <TvIcon />
            </span>
            {i18n.t("tabs:series")}
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            activeClassName="bg-active"
            exact
            to={"/games"}
            className="transition-all h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span className="transition-all">
              <SportsEsportsIcon />
            </span>
            {i18n.t("tabs:games")}
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            activeClassName="bg-active"
            exact
            to={"/notepad"}
            className="transition-all h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            <span className="transition-all">
              <EditNoteIcon />
            </span>
            {i18n.t("tabs:notepad")}
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Tabs;
