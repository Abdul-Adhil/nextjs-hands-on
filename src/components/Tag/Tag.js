import React from "react";
import styles from "./Tag.module.scss";

export default function Tag(props) {
  const { label } = props;
  return <h4 className={styles["tag"]}>#{label}</h4>;
}
