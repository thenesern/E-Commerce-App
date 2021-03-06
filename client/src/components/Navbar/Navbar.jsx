// Dependencies
import styles from "./Navbar.module.css";
import React from "react";
import { ShoppingCartOutlined, AccountCircleRounded } from "@material-ui/icons";
import LoginIcon from "@mui/icons-material/Login";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { logout } from "../../redux/authSlice";
import MainMenu from "../MainMenu/MainMenu";
// Styles
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser?.token);
  const admin = useSelector((state) => state.auth.currentUser?.isAdmin);
  const firstName = useSelector((state) => state.auth.currentUser?.firstName);
  const lastName = useSelector((state) => state.auth.currentUser?.lastName);
  const quantity = useSelector((state) => state.cart?.quantity);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    setAnchorEl(null);
    dispatch(logout());
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link to="/" className={styles.link}>
            <h1 className={styles.logo}>LOGO</h1>
          </Link>
        </div>
        <div className={styles.center}>
          <MainMenu />
        </div>
        <div className={styles.right}>
          {/*  <div className={styles.searchBar}>
            <div className={styles["search-container"]}>
              <input
                className={styles.input}
                type="text"
                placeholder="Search"
              />
              <Search className={styles.search} />
            </div>
          </div> */}
          {!user && (
            <div className={styles.actions}>
              <Link to="/login" className={styles["menu-item"]}>
                <button className={styles.buttonSignIn}>
                  <LoginIcon style={{ fontSize: "16px" }} />
                  <span>Sign In</span>
                </button>
              </Link>
              <Link to="/register" className={styles["menu-item"]}>
                <button className={styles.buttonSignUp}>
                  <span>Sign Up</span>
                </button>
              </Link>
            </div>
          )}
          {user && (
            <>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ display: "flex", gap: "6px" }}
              >
                <AccountCircleRounded />
                <h6 className={styles.username}>
                  {firstName} {lastName}
                </h6>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={styles.menuList}
              >
                {admin && (
                  <Link to="/dashboard" className={styles["menu-link"]}>
                    <span className={styles["link-item"]}>Dashboard</span>
                  </Link>
                )}
                {user && !admin && (
                  <Link to="/profile" className={styles["menu-link"]}>
                    <span className={styles["link-item"]}>Profile</span>
                  </Link>
                )}
                <Link
                  to="/"
                  className={styles["menu-link"]}
                  onClick={logoutHandler}
                >
                  <span className={styles["link-item"]}>Log out</span>
                  <LogoutIcon className={styles.icon} />
                </Link>
              </Menu>
            </>
          )}
          <Link to="/cart">
            <div className={styles["menu-item"]}>
              <Badge
                badgeContent={quantity}
                color="primary"
                style={{ transform: "scale(0.9)" }}
              >
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
