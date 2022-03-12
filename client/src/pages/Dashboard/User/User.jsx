import style from "./User.module.css";
import Sidebar from "../../../components/Dashboard/SideBar/SideBar";
import Navbar from "../../../components/Navbar/Navbar";
import Chart from "../../../components/Dashboard/Chart/Chart";
import List from "../../../components/Dashboard/Table/Table";

const User = () => {
  return (
    <div className={style.single}>
      <Sidebar />
      <div className={style.singleContainer}>
        <Navbar />
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.editButton}>Edit</div>
            <h1 className={style.title}>Information</h1>
            <div className={style.item}>
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className={style.itemImg}
              />
              <div className={style.details}>
                <h1 className={style.itemTitle}>Jane Doe</h1>
                <div className={style.detailItem}>
                  <span className={style.itemKey}>Email:</span>
                  <span className={style.itemValue}>janedoe@gmail.com</span>
                </div>
                <div className={style.detailItem}>
                  <span className={style.itemKey}>Phone:</span>
                  <span className={style.itemValue}>+1 2345 67 89</span>
                </div>
                <div className={style.detailItem}>
                  <span className={style.itemKey}>Address:</span>
                  <span className={style.itemValue}>
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className={style.detailItem}>
                  <span className={style.itemKey}>Country:</span>
                  <span className={style.itemValue}>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
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
