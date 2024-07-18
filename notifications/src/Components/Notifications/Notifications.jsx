import React from "react";
import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <h1>Notifications</h1>
        <div className={styles.notificationsContainer}>
          {notificationsData.map((item, index) => {
            return (
              <div
                key={item?.id}
                style={{ background: item?.background }}
                className={styles.notificationItem}
              >
                <img src={item?.icon} alt={`${item?.title} icon`} />
                <p>{item?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

const notificationsData = [
  {
    id: 1,
    title: "Information Message",
    icon: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    background: "#0b69ff",
  },
  {
    id: 2,
    title: "Success Message",
    icon: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
    background: "#2dca73",
  },
  {
    id: 3,
    title: "Warning Message",
    icon: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    background: "#ffb800",
  },
  {
    id: 4,
    title: "Danger Message",
    icon: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    background: "#ff0b37",
  },
];
