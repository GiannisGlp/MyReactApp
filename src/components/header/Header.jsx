import React from "react";
import styles from "./Header.module.css";

import ColorPicker from "../../UI/LayoutColorPicker/LayoutColorPicker";
import Typed from "../../UI/Typed/Typed";

const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <Typed />
      <ColorPicker />
    </div>
  );
};
export default Header;
