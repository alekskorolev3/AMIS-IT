import React from 'react'
import styles from "../../styles/ButtonDescription.module.css"
import Link from "next/link";

const ButtonDescription = ({link, invert=false}) => {
    return (
        <Link className={!invert ? styles.button : `${styles.button} ${styles.invert}`} href={link !== undefined ? link.URL : "/"}>
            <span>
                {link !== undefined ? link.Title : ""}
            </span>
        </Link>
    )
}

export default ButtonDescription;
