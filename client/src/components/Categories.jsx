import Category from "./Category";
import styles from "./Categories.module.css";
import { categories } from "../data";

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <Category item={item} />
      ))}
    </div>
  );
};

export default Categories;
