import styles from "../../assets/css/StyleHome.module.css";

import doneIcon from "../../assets/img/doneIcon.png";
import listIcon from "../../assets/img/menuIcon.png";

function Main({ listActivities }) {
  const listItems = listActivities.map((activity) => {
    if (activity.complete === true) {
      return (
        <>
          <div className={styles.boxListDone}>
            <img srcSet={doneIcon} alt="" style={{ padding: "5px" }} />
            <div>
              <li>
                <s>{activity.title}</s>
              </li>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.boxList}>
            <img srcSet={listIcon} alt="" style={{ padding: "5px" }} />
            <div>
              <li>{activity.title}</li>
            </div>
          </div>
        </>
      );
    }
  });
  return <ul>{listItems}</ul>;
}

export default Main;
