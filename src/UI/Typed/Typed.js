import React from "react";
import Typed from "react-typed";

import styles from "./Typed.module.css";

const typed = () => {
  return (
    <div className={styles.Typed}>
      <h1>My New Portfolio</h1>
      <Typed
        className={styles.TypedText}
        strings={[
          "Web Design",
          "Web Development",
          "Facebook ads SMM",
          "Google ads",
        ]}
        typeSpeed={80}
        backSpeed={80}
      />
    </div>
  );
};

export default typed;
