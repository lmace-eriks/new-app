import React from 'react'

import styles from './styles.css'

type NewAppProps = {
  blockClass: string
}

function NewApp(props: NewAppProps) {
  return (
    <section className={`${styles.container}--${props.blockClass}`}>
      Hello, World!
    </section>
  )
}

export default NewApp
