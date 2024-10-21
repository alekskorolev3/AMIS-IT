import styles from "../styles/Header.module.css"
import ButtonMain from "./ButtonMain/ButtonMain";
import Link from "next/link";

const Header = ({menu, short}) => {

    console.log(short)

    const {Title, Subtitle} = menu
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.menuWrapper}>
                    <Link href="/">
                        <img src="/amis-it-horiz.svg" alt="logo" className={styles.logo}/>
                    </Link>
                    <div className={styles.nav}>
                        <ul className={styles.menuItems}>
                            {
                                menu.Submenus.map((menuItem) => {
                                    const {id, Title, URL, MenuItems} = menuItem
                                    return (
                                        <li key={id} className={styles.menuItem}>
                                            {URL ? <Link href={`/${URL}`}>{Title}</Link> :
                                                <div className={styles.titleWrapper}>
                                                {Title}
                                                <img src="/arrow_down.svg" alt="arrow"/>
                                            </div>}

                                            <span className={styles.backButton}>
                                                <img src="/arrowback.svg" alt="arrow_back"/>
                                            Назад
                                            </span>
                                            {
                                                MenuItems.length ? <div className={styles.dropdown}>
                                                    {
                                                        MenuItems.map((submenu) => {
                                                            const {id, Title, Links} = submenu
                                                            return (
                                                                <div key={id} className={styles.column}>
                                                                    <span className={styles.columnTitle}>{Title}</span>

                                                                    {
                                                                        Links.map((link) => {
                                                                            const {id, Title, URL} = link

                                                                            return (
                                                                                <Link key={id} href={URL}>{Title}</Link>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div> : null
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={styles.burger} onClick={() => {
                            document.getElementsByClassName(styles.burger)[0].classList.toggle(styles.toggle)
                            document.getElementsByClassName(styles.menuItems)[0].classList.toggle(styles.navActive)
                        }}>
                            <div className={styles.line1}></div>
                            <div className={styles.line2}></div>
                            <div className={styles.line3}></div>
                        </div>
                    </div>


                </div>

                <div className={styles.heroWrapper}>
                    <h1>{short ? 'Card' in short.attributes ? short.attributes.Card.Title : short.attributes.Title : Title}</h1>
                    {
                        short ? null : <div style={{width: "50%", display: "grid"}}>
                            <img src="/robohand.png" alt="hand" className={short ? styles.robohandSmall : styles.robohand}/>
                        </div>
                    }


                </div>
                {
                    !short ?
                        <>
                            <div className={styles.subtitleWrapper}>
                                <h2>{Subtitle}</h2>

                                <ButtonMain link={{Title: "Связаться с нами", URL: "/contacts"}}/>
                            </div>

                            <img src="/gear.svg" alt="gear" className={styles.gear1}/>
                            <img src="/gear.svg" alt="gear" className={styles.gear2}/>
                        </>
                        :
                        <>
                            <div className={styles.subtitleWrapper}>
                                <h2>{Subtitle}</h2>

                                <ButtonMain link={{Title: "Связаться с нами", URL: "/contacts"}}/>
                            </div>
                            <img src="/gear.svg" alt="gear" className={styles.gear1 + " " + styles.spin} style={{maxWidth: "420px"}}/>
                        </>
                }
            </div>
        </header>
    )
}

export default Header
