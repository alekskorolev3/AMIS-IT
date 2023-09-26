import React from 'react'
import styles from "../styles/Content.module.css"

const Content = ({data}) => {
    return (
        <section className={styles.content}>
            <div dangerouslySetInnerHTML={{__html: data}}/>
        </section>
    )
}

export default Content
