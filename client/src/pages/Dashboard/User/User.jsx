import style from "./User.module.css";
import Sidebar from "../../../components/Dashboard/SideBar/SideBar";
import Navbar from "../../../components/Navbar/Navbar";
import Chart from "../../../components/Dashboard/Chart/Chart";
import List from "../../../components/Dashboard/Table/Table";
import { useSelector } from "react-redux";

const User = () => {
  const profile = useSelector((state) => state.auth.currentUser);
  console.log(profile);
  return (
    <div className={style.single}>
      <div className={style.singleContainer}>
        <Navbar />
        <div className={style.top}>
          <div className={style.left}>
            <h1 className={style.title}>Information</h1>
            <div className={style.item}>
              <img src={profile.image} alt="" className={style.itemImg} />
              <div className={style.details}>
                <h1 className={style.itemTitle}>
                  {profile.firstName.replace(
                    profile.firstName[0],
                    profile.firstName[0].toUpperCase()
                  )}{" "}
                  {profile.lastName.replace(
                    profile.lastName[0],
                    profile.lastName[0].toUpperCase()
                  )}
                </h1>
                <div className={style.detailItem}>
                  <span className={style.itemKey}>Email:</span>
                  <span className={style.itemValue}>{profile.email}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.right}>update</div>
        </div>
        <div className={style.bottom}>
          <h1 className={style.title}>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default User;
