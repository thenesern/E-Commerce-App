import styles from "./User.module.css";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/Dashboard/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { updateUser } from "../../redux/apiCalls";

const User = () => {
  const profile = useSelector((state) => state.auth.currentUser);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };
  const id = useSelector((state) => state.auth.currentUser.id);
  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateUser(dispatch, { firstName, lastName, id });
  };

  const formHandler = (e) => {
    e.preventDefault();
    setIsChanged(true);
  };
  return (
    <div className={styles.single}>
      <div className={styles.singleContainer}>
        <Navbar />
        <div className={styles.top}>
          <div className={styles.left}>
            <h1 className={styles.title}>Last Transactions</h1>
            <List />
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <img src={profile.image} alt="" className={styles.itemImg} />
              <form className={styles.details} onChange={formHandler}>
                <TextField
                  className={styles.itemTitle}
                  helperText="First Name"
                  value={firstName.replace(
                    firstName[0],
                    firstName[0].toUpperCase()
                  )}
                  onChange={firstNameChangeHandler}
                />
                <TextField
                  className={styles.itemTitle}
                  helperText="Last Name"
                  value={lastName.replace(
                    lastName[0],
                    lastName[0].toUpperCase()
                  )}
                  onChange={lastNameChangeHandler}
                />
                <TextField
                  className={styles.email}
                  helperText="Email"
                  value={profile.email}
                  disabled
                />
                <button
                  disabled={!isChanged}
                  className={styles.button}
                  onClick={updateHandler}
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
