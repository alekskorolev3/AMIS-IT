import React from 'react'
import styles from "../styles/News.module.css"
import ButtonMain from "./ButtonMain/ButtonMain";
import ButtonDescription from "./ButtonMain/ButtonDescription";
import useFormattedDate from "./hooks/useFormattedDate";
import {API} from "../const";

const News = ({news}) => {


    return (
        <section className={styles.content}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>Новости</h2>
                <ButtonMain link={{Title: "Просмотреть все", URL: "/"}}/>

                <div className={styles.container}>
                    {
                        news.map((post) => {
                            return (
                                <div key={post.id} className={styles.card}>
                                    <img
                                        src={`${API}${post.attributes.Card.Picture.data.attributes.url}`}
                                        alt="news1" className={styles.cardImg}/>
                                    <div className={styles.cardWrapper}>
                                        <div className={styles.cardInnerWrapper}>
                                            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                                            <span className={styles.cardDate}>{useFormattedDate(post.attributes.createdAt)}</span>
                                            <div className={styles.cardContent}>
                                                <span className={styles.cardTitle}>{post.attributes.Card.Title}</span>
                                                <span className={styles.cardSubtitle}>{post.attributes.Card.Subtitle}</span>
                                            </div>
                                        </div>
                                        <ButtonDescription link={{Title: "Подробнее", URL: `news/${post.id}`}} invert={true}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/*<img src="/gear2.svg" alt="gear" className={styles.gear}/>*/}
            </div>
        </section>
    )
}

export default News
