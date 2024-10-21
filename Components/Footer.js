import React from 'react'
import styles from "../styles/Footer.module.css"
import ButtonMain from "./ButtonMain/ButtonMain";
import Link from "next/link";
import {API} from "../const";

const Footer = ({footer}) => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.headSection}>
                    <img src="/amis-it-horiz.svg" alt="logo" className={styles.logo}/>
                    {/*<div className={styles.headSectionWrapper}>*/}
                    {/*    <span className={styles.headTitle}>Остались вопросы?</span>*/}
                    {/*    <ButtonMain link={{Title: "Связаться с нами", URL: "/"}}/>*/}
                    {/*</div>*/}
                </div>

                <div className={styles.content}>
                    <div className={styles.contentWrapper}>
                        {
                            footer?.Columns.map((column) => {
                                const {id, Title} = column

                                return (
                                    <div key={id} className={styles.rowWrapper}>
                                        <span className={styles.rowTitle}>{Title}</span>
                                        {
                                            column.Links.map((link) => {
                                                const {id, Title} = link
                                                return (
                                                    <div key={id} className={styles.row}>
                                                        <Link href={link?.URL ? link?.URL : "/"} className={styles.link}>{Title}</Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.contactsWrapper}>
                        <div className={styles.addressWrapper}>
                            <span className={styles.contactsColumnTitle}>Адрес</span>
                            <div className={styles.addressWrapperInner}>
                                <img src="/location_icon.svg" alt="Location Icon"/>
                                <a className={styles.email}
                                   href='https://yandex.by/maps/-/CDXtAL8i'>{footer?.Contacts?.Address}</a>
                            </div>
                        </div>

                        <div className={styles.phoneNumbersWrapper}>
                            <span className={styles.contactsColumnTitle}>Телефоны</span>
                            <div className={styles.phoneNumbersInnerWrapper}>
                                <div className={styles.addressWrapperInner}>
                                    <img src="/call_icon.svg" alt="Call Icon"/>
                                    <img src="/belarus-flag.svg" alt="Call Icon"/>
                                    <a href={`tel:${footer?.Contacts?.Phone}`}
                                       className={styles.phoneNumber}>{footer?.Contacts?.Phone}</a>
                                </div>

                                <div className={styles.addressWrapperInner}>
                                    <img src="/call_icon.svg" alt="Call Icon"/>
                                    <img src="/belarus-flag.svg" alt="Call Icon"/>
                                    <a href={`tel:${footer?.Contacts?.Fax}`}
                                       className={styles.phoneNumber}>{footer?.Contacts?.Fax}</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.phoneNumbersWrapper}>
                            <span className={styles.contactsColumnTitle}>Еmail</span>
                            <div className={styles.addressWrapperInner}>
                                <img src="/mail_icon.svg" alt="Mail Icon"/>
                                <a className={styles.email}
                                   href={`mailto:${footer?.Contacts?.Email}`}>{footer?.Contacts?.Email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.tailSection}>
                    <div className={styles.tailWrapper}>
                        {
                            footer?.AdditionalLinks.map((link) => {
                                const {id, Title, URL} = link
                                return (
                                    <Link key={id} href={URL} className={styles.link}>{Title}</Link>
                                )
                            })
                        }
                    </div>

                    <div className={styles.socialWrapper}>
                        {
                            footer?.SocialLinks.map((link) => {
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
