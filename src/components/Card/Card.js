import React from "react";
import Image from "next/image";
import Tag from "../Tag/Tag";
import styles from "./card.module.scss";

export default function Card(props) {
  const { src, alt, tagsData } = props;
  let tags = tagsData.map((tag) => {
    return <Tag label={tag} />;
  });

  return (
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <Image src={src} width={300} height={400} />
      </div>
      <div>{tags}</div>
    </div>
  );
}
