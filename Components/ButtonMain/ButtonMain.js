import React from 'react'
import styles from "../../styles/ButtonMain.module.css"
import Link from "next/link";

const ButtonMain = ({link, icon = true}) => {
    return (
        <Link className={styles.button} href={link !== undefined ? link.URL : "/"}>
            <span>
                {link !== undefined ? link.Title : ""}
            </span>

            {
                icon ? <img src="/arrow.svg" alt="arrow"/> : null
            }
        </Link>
    )
}

export default ButtonMain
