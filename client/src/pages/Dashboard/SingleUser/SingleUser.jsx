import styles from "./SingleUser.module.css";
import SideBar from "../../../components/Dashboard/SideBar/SideBar";
import Navbar from "../../../components/Navbar/Navbar";
import List from "../../../components/Dashboard/Table/Table";
import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { updateUser } from "../../../redux/apiCalls";
import { useParams } from "react-router-dom";
import { userRequest } from "../../../requestMethods";
import { useEffect } from "react";

const SingleUser = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get(`/users/${userId}`);
        setProfile(res.data.data.doc);
        setFirstName(res.data.data.doc.firstName);
        setLastName(res.data.data.doc.lastName);
        setEmail(res.data.data.doc.email);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  }, [userId]);

  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };
  const updateHandler = (e) => {
    e.preventDefault();
    const id = userId;
    updateUser(dispatch, { firstName, lastName, id });
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setIsChanged(true);
  };
  return (
    <div>
      <Navbar />
      <div className={styles.singleContainer}>
        <SideBar />
        <div className={styles.top}>
          <div className={styles.right}>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <img src={profile?.image} alt="" className={styles.itemImg} />
              <form className={styles.details} onChange={formHandler}>
                <TextField
                  className={styles.itemTitle}
                  helperText="First Name"
                  value={firstName}
                  onChange={firstNameChangeHandler}
                />
                <TextField
                  className={styles.itemTitle}
                  helperText="Last Name"
                  value={lastName}
                  onChange={lastNameChangeHandler}
                />
                <TextField
                  className={styles.email}
                  helperText="Email"
                  value={email}
                  onChange={emailChangeHandler}
                />
                <input type="file" />
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
          <div className={styles.left}>
            <h1 className={styles.title}>Last Transactions</h1>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
