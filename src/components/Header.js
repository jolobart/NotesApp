import React from "react";
import { motion } from "framer-motion";
import { BsMoon, BiSun } from "react-icons/bs";
import { MdBrightness7 } from "react-icons/md";
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
      {/* <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Dark Mode
      </button> */}
      <div>
        <input
          type="checkbox"
          class="checkbox"
          id="chk"
          onChange={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
        />
        <label class="label" for="chk">
          <BsMoon className="fa-moon" />
          <MdBrightness7 className="fas fa-sun" />
          <div class="ball"></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
