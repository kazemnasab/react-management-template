import React from "react";
import CardSimple from "./Card.Simple";

export default function Card(props) {
  const { type } = props;
  if (type == "simple") return <CardSimple {...props} />;
  return <></>;
}
