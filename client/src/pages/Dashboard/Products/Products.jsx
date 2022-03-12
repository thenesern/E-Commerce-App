import styles from "./Products.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import SideBar from "../../../components/Dashboard/SideBar/SideBar";
import DataTable from "../../../components/Dashboard/ProductTable/ProductTable";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.listContainer}>
        <SideBar />
        <DataTable />
      </div>
    </div>
  );
};
export default Products;
