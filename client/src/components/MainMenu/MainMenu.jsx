// Dependencies
import styles from "./MainMenu.module.css";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { mainMenu } from "../../data";
import Menu from "@material-ui/core/Menu";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createTheme({});

// Styles

const Announcement = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleClose(e);
      },
    },
  };
  mainMenu.map((item) => item.subs.map((a) => a.title));
  return (
    <ThemeProvider theme={theme}>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {mainMenu.map((item) => item.subs.map((a) => a.title))}
      </Menu>
      <ul className={styles.list}>
        {mainMenu.map((item) => (
          <Button
            aria-owns={open ? "simple-menu" : null}
            aria-haspopup="true"
            onMouseOver={handleOpen}
            onMouseLeave={handleClose}
            style={{ zIndex: 1301 }}
            key={item.title}
          >
            {item.title}
          </Button>
        ))}
      </ul>
    </ThemeProvider>
  );
};

export default Announcement;
