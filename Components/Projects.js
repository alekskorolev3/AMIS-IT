import React from 'react'
import styles from "../styles/Projects.module.css"
import ButtonMain from "./ButtonMain/ButtonMain";
import ButtonDescription from "./ButtonMain/ButtonDescription";
import {API} from "../const";

const Projects = ({projects}) => {

    return (
        <section className={styles.content}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>Технические решения</h2>
                <ButtonMain link={{Title: "Просмотреть все", URL: "/"}}/>

                <div className={styles.container}>
                    {
                        projects.map((project) => {
                            const {id, Title, Big, Picture, Color} = project.attributes.Card

                            if (Big) {
                                return (
                                    <div key={id} className={styles.cardBig}>
                                        <img src={`${API}${Picture.data.attributes.url}`} alt="card1"/>
                                        <div className={styles.cardContent}>
                                            <span className={styles.cardTitle}>{Title}</span>
                                            <ButtonDescription link={{Title: "Узнать больше", URL: `/projects/${id}`}}/>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={id} className={styles.card}
                                         style={Color !== null ? {background: `${Color}`} : null}>
                                        <div className={styles.cardContent}>
                                            <span className={styles.cardTitle}>{Title}</span>
                                            <ButtonDescription link={{Title: "Узнать больше", URL: `/projects/${id}`}}/>
                                        </div>
                                        <img src={`${API}${Picture.data.attributes.url}`} alt="card2"/>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <img src="/gear2.svg" alt="gear" className={styles.gear}/>
            </div>
        </section>
    )
}

export default Projects
