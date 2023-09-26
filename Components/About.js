import React from 'react'
import styles from "../styles/About.module.css"
import Lottie from 'react-lottie';
import animation2 from "../public/animation2.json"

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section>
            <div className={styles.content}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{maxWidth: "400px", maxHeight: "400px"}}>
                        <Lottie
                            options={defaultOptions}
                        />
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.title}>
                            Как мы планируем изменить отрасль
                        </h3>
                        <span className={styles.subtitle}>Преобразуйте свой бизнес с помощью наших индивидуальных программных решений</span>
                    </div>
                    <ul>
                        <li>
                            <img src="/check.svg" alt="check"/>
                            <span>Преобразуйте свой бизнес с помощью наших индивидуальных программных решений</span>
                        </li>
                        <li>
                            <img src="/check.svg" alt="check"/>
                            <span>Стимулирование роста бизнеса за счет инноваций в программном обеспечении</span>
                        </li>
                        <li>
                            <img src="/check.svg" alt="check"/>
                            <span>Создание передового программного обеспечения для решения сложных задач</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.content} style={{gridTemplateColumns: "1.2fr 1fr", flexFlow: "unset", flexDirection: "column"}}>
                <div className={styles.contentWrapper}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.title}>
                            Чем мы отличаемся от других компаний
                        </h3>
                        <span className={styles.subtitle}>Преобразуйте свой бизнес с помощью наших индивидуальных программных решений</span>
                    </div>
                    <ul>
                        <li>
                            <img src="/check.svg" alt="check"/>
                            <span>Преобразуйте свой бизнес с помощью наших индивидуальных программных решений</span>
                        </li>
                        <li>
                            <img src="/check.svg" alt="check"/>
                            <span>Стимулирование роста бизнеса за счет инноваций в программном обеспечении</span>
                        </li>
                        <li>
                            <img src="/check.svg" alt="check"/>
                            <span>Создание передового программного обеспечения для решения сложных задач</span>
                        </li>
                    </ul>
                </div>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{maxWidth: "400px", maxHeight: "400px"}}>
                        <Lottie
                            options={defaultOptions}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
