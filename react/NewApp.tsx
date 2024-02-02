import React, { ReactChildren, useEffect } from "react";
import { Link, canUseDOM, useRuntime } from "vtex.render-runtime";

import { default as s } from "./styles.css";

type NewAppProps = {
  name: string
  blockClass: string
  children: ReactChildren | any
}

const NewApp = ({ name, blockClass, children }: NewAppProps) => {
  const runtime = useRuntime();

  useEffect(() => {
    if (canUseDOM) {
      console.info("Using DOM");
    }
    console.info(runtime);
  });

  const bc = (className: string, modifier: string = blockClass) => `${className} ${className}--${modifier}`;

  return (
    <section className={bc(s.container)} >
      <Link href="#">Hello, {name || "World"}!</Link>
      {children}
    </section>
  )
}


NewApp.schema = {
  title: "NewApp",
  description: "",
  type: "object",
  properties: {
    name: {
      title: "Name",
      description: "",
      type: "string",
      widget: { "ui:widget": "textarea" }
    }
  }
};

export default NewApp


