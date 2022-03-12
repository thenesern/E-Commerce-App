// Dependencies
import React from "react";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircleRounded,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { logout } from "../../redux/userSlice";
// Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser?.others._id);
  const firstName = useSelector(
    (state) => state.user.currentUser?.others.firstName
  );
  const lastName = useSelector(
    (state) => state.user.currentUser?.others.lastName
  );
  const quantity = useSelector((state) => state.cart.quantity);
  const [anchorEl, setAnchorEl] = React.useState(null);
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
          <span className={styles.language}>EN</span>
          <div className={styles["search-container"]}>
            <input className={styles.input} type="text" />
            <Search className={styles.search} />
          </div>
        </div>
        <div className={styles.center}>
          <Link to="/" className={styles.link}>
            <h1>Logo</h1>
          </Link>
        </div>
        <div className={styles.right}>
          {!user && (
            <>
              <Link to="/register" className={styles["menu-item"]}>
                Sign Up
              </Link>
              <Link to="/login" className={styles["menu-item"]}>
                Sign In
              </Link>
            </>
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
                  <p>
                    {firstName} {lastName}
                  </p>
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
              >
                <Link to="/dashboard" className={styles["menu-link"]}>
                  <MenuItem className={styles["menu-link"]}>Dashboard</MenuItem>
                  <MenuItem
                    onClick={logoutHandler}
                    className={styles["menu-link"]}
                  >
                    Log out
                  </MenuItem>
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
