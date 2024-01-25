import React, { ReactChildren, useEffect } from 'react'
import { Link, canUseDOM } from "vtex.render-runtime";

import styles from './styles.css'

type NewAppProps = {
  name: string
  blockClass: string
  children: ReactChildren | any
}

const NewApp = ({ name, blockClass, children }: NewAppProps) => {

  useEffect(() => {
    if (canUseDOM) {
      console.info("Using DOM");
    }
  })

  return (
    <section className={`${styles.container}--${blockClass} ${styles.container}`} >
      <Link href="#">Hello, {name}</Link>
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
