import React, {useEffect, useRef, useState} from 'react'
import styles from "../styles/Projects.module.css"
import ButtonMain from "./ButtonMain/ButtonMain";
import ButtonDescription from "./ButtonMain/ButtonDescription";
import {API} from "../const";
import debounce from "lodash.debounce";
import cn from "classnames";

const Projects = ({projects}) => {

    const containerRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollContainerBy = (distance) => containerRef.current?.scrollBy({ left: distance, behavior: "smooth" });

    useEffect(() => {
        const { current } = containerRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);

        return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
        };
    }, []);

    const checkForScrollPosition = () => {
        const { current } = containerRef;
        if (current) {
            const { scrollLeft, scrollWidth, clientWidth } = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    return (
        <section className={styles.content}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>Технические решения</h2>
                <ButtonMain link={{Title: "Просмотреть все", URL: "/"}}/>

                <div className={styles.containerButton}>
                    <div className={styles.container} ref={containerRef}>
                        {
                            projects.map((project) => {
                                const {id, Title, Big, Picture, Color} = project.attributes.Card

                                if (Big) {
                                    return (
                                        <div key={id} className={styles.cardBig}>
                                            <img src={`${API}${Picture.data.attributes.url}`} alt="card1"/>
                                            <div className={styles.cardContent}>
                                                <span className={styles.cardTitle}>{Title}</span>
                                                <ButtonDescription
                                                    link={{Title: "Узнать больше", URL: `/projects/${id}`}}/>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={id} className={styles.card}
                                             style={Color !== null ? {background: `${Color}`} : null}>
                                            <div className={styles.cardContent}>
                                                <span className={styles.cardTitle}>{Title}</span>
                                                <ButtonDescription
                                                    link={{Title: "Узнать больше", URL: `/projects/${id}`}}/>
                                            </div>
                                            <img src={`${API}${Picture.data.attributes.url}`} alt="card2"/>
                                        </div>
                                    )
                                }
                            })
                        }

                        <button
                            className={cn(styles.projectsButton, styles.projectsButtonLeft, {[`${styles.projectsButtonHidden}`]: !canScrollLeft})}
                            disabled={!canScrollLeft}
                            onClick={() => scrollContainerBy(-400)}>
                            <img src="/arrow_left.svg" alt="arrow_left"/>
                        </button>

                        <button
                            className={cn(styles.projectsButton, styles.projectsButtonRight, {[`${styles.projectsButtonHidden}`]: !canScrollRight})}
                            disabled={!canScrollRight}
                            onClick={() => scrollContainerBy(400)}>
                            <img src="/arrow-right.svg" alt="arrow_right"/>
                        </button>
                    </div>
                </div>
                <img src="/gear2.svg" alt="gear" className={styles.gear}/>
            </div>
        </section>
    )
}

export default Projects
