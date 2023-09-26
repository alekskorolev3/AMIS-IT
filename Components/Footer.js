import React from 'react'
import styles from "../styles/Footer.module.css"
import ButtonMain from "./ButtonMain/ButtonMain";
import Link from "next/link";
import {API} from "../const";

const Footer = ({footer}) => {

    const {Columns, AdditionalLinks, SocialLinks} = footer

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.headSection}>
                    <img src="/logo.svg" alt="logo" className={styles.logo}/>
                    <div className={styles.headSectionWrapper}>
                        <span className={styles.headTitle}>Остались вопросы?</span>
                        <ButtonMain link={{Title: "Связаться с нами", URL: "/"}}/>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.contentWrapper}>
                        {
                            Columns.map((column) => {
                                const {id, Title} = column

                                return (
                                    <div key={id} className={styles.rowWrapper}>
                                        <span className={styles.rowTitle}>{Title}</span>
                                        {
                                            column.Links.map((link) => {
                                                const {id, Title, URL} = link
                                                return (
                                                    <div key={id} className={styles.row}>
                                                        <Link href={URL} className={styles.link}>{Title}</Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className={styles.tailSection}>
                    <div className={styles.tailWrapper}>
                        {
                            AdditionalLinks.map((link) => {
                                const {id, Title, URL} = link
                                return (
                                    <Link key={id} href={URL} className={styles.link}>{Title}</Link>
                                )
                            })
                        }
                    </div>

                    <div className={styles.socialWrapper}>
                        {
                            SocialLinks.map((link) => {
                                const {id, Picture, URL} = link
                                return (
                                    <Link key={id} href={URL}>
                                        <img src={`${API}${Picture.data.attributes.url}`} alt="VK"/>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
