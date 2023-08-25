import React from "react";
import Card from "@/components/Card/Card";
import data from "@/data/data.json";
import styles from "./movie.module.scss";

export default function Movie() {
  let cards = data.map((movie, index) => {
    return <Card key={index} src={movie.link} tagsData={movie.actors} />;
  });
  return <div className={styles["card-wrapper"]}> {cards}</div>;
}
