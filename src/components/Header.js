import React from "react";
import { motion } from "framer-motion";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Notes
      </motion.h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
